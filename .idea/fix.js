var template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GHC Contractor - Moves</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.11.1/css/uswds.min.css" integrity="sha512-jTdlH2LXTQ/nSPgY0SoocLYibqnSu0B7/DM2cmA3jPrw89dbtZKeytKXDJPYlZpjkHfHUlTe/4MTGovdM73AJw==" crossorigin="anonymous" />
    <style>
    li {
        list-style-type: none !important;
    }
    .hide {
        display: none;
    }
    .show {
        display: block;
    }
    </style>
    <script>

</script>
</head>
<body>
  <h2 class="site-preview-heading font-sans-2xl">GHC Contractor</h6>
  <h3 class="site-component-section-title font-sans-xl">Moves</h3>

  <div class="usa-alert usa-alert--info" id="alert" >
    <div class="usa-alert__body">
      <h4 id="alert-heading" class="usa-alert__heading margin-bottom-4">New Move Approved</h4>
      <ul class="usa-content-list font-mono-md">
        <li><strong>Customer Name:</strong> {{response.order.customer.firstName}} {{response.order.customer.lastName}} </li>
        <li><strong>Move ID:</strong> {{response.id}}</li>
      </ul>
    </div>
  </div>

</body>
</html>
`
const responseJSON = pm.response.json();
let shipment = ""
let cratingServiceItem = ""
let shuttlingServiceItem = ""
let uncratingServiceItem = ""

if (pm.response.code == 200) {
  pm.visualizer.set(template, {
    response: responseJSON
  })
  // Set variable to update a shipment -- might not need these
  console.log("Need to set new variables for mtoShipmentID, eTag")
  pm.environment.set("moveTaskOrderID", responseJSON.id)
  pm.environment.set("mtoShipmentID", responseJSON.mtoShipments[0].id)
  pm.environment.set("mtoShipmentETag", responseJSON.mtoShipments[0].eTag)
  let destAddress = {
    "streetAddress1": "7 Q Street",
    "city": "Anytown",
    "state": "OK",
    "postalCode": "74074"
  }
  if (responseJSON.mtoShipments[0].destinationAddress) {
    console.log("Destination address found - excluding from update")
    destAddress = {}
  }
  let primeWeights = {
    "primeEstimatedWeight": 3000,
    "primeActualWeight": 3300,
  }
  if (responseJSON.mtoShipments[0].primeEstimatedWeight || responseJSON.mtoShipments[0].primeActualWeight) {
    console.log("Weights found - excluding from update")
    primeWeights = {}
  }

  // Represents updating a shipment with pickup dates, weights, and new destination address
  const patchUpdateShipment = {
    url: pm.environment.get("baseUrl") + '/mto-shipments/' + pm.environment.get("mtoShipmentID"),
    method: 'PATCH',
    header: {
      'Content-Type': 'application/json',
      'If-Match': pm.environment.get("mtoShipmentETag")
    },
    body: {
      mode: 'raw',
      raw: JSON.stringify({
        "scheduledPickupDate": "2021-08-20",
        "actualPickupDate": "2021-08-20",
        "destinationAddress": destAddress,
        ...primeWeights
      })
    }
  }

  pm.sendRequest(patchUpdateShipment, (error, response) => {
    shipment = response.json()
    console.log(error ? error : shipment);
console.log("PATCH UPDATE SHIPMENT")
    template += `
<div class="margin-top-4 margin-bottom-2">
  <button class="usa-button" id="updateMove" onclick="showMoveUpdate()">Update the Move</button>
</div>
<div class="hide" id="updatedShipment">
  <table class="usa-table usa-table--borderless usa-table--striped">
  <caption>Updated Shipment Information</caption>

  <tbody>
    <tr>
      <th scope="row">Destination Address</th>
      <td>{{shipment.destinationAddress.streetAddress1}}, {{shipment.destinationAddress.city}}, {{shipment.destinationAddress.state}}, {{shipment.destinationAddress.postalCode}}</td>
    </tr>

    <tr>
      <th scope="row">Scheduled Pickup Date</th>
      <td>{{shipment.scheduledPickupDate}}</td>
    </tr>

    <tr>
      <th scope="row">Estimated Weight</th>
      <td>1400</td>
    </tr>

    <tr>
      <th scope="row">Actual Pickup Date</th>
      <td>{{shipment.actualPickupDate}}</td>
    </tr>

    <tr>
      <th scope="row">Actual Weight</th>
      <td>{{shipment.primeActualWeight}}</td>
    </tr>
  </tbody>
</table>
</div>
<script>
  function showMoveUpdate(){
    // Show updated shipment table 
    update = document.getElementById("updatedShipment");
    update.className = 'show';

    // Change alert text
    alert = document.getElementById("alert-heading");
    alert.innerText = "Shipment Updated";
  }
</script>
  `

    if (response.code == 200) {``
      pm.environment.set("mtoShipmentETag", shipment.eTag)
      pm.environment.set("destinationAddressID", shipment.destinationAddress.id)
      pm.environment.set("destinationAddressETag", shipment.destinationAddress.eTag)
      pm.visualizer.set(template, {
        response: responseJSON,
        shipment: shipment,
        cratingServiceItem: cratingServiceItem
      })
            console.log("IN SERVICE ITEMS")
        //CRATING :
        const postServiceItemCrating = {
                url: pm.environment.get("baseUrl") + '/mto-service-items/',
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'If-Match': pm.environment.get("mtoShipmentETag")
                },
                body: {
                    mode: 'raw',
                    raw: JSON.stringify({
                        "crate": {
                            "height": 3000,
                            "length": 3000,
                            "width": 4000
                        },
                        "description": "grandfather clock",
                        "item": {
                            "height": 2000,
                            "length": 2000,
                            "width": 3000
                        },
                        "reServiceCode": "DCRT",
                        "reason": null,
                        "modelType": "MTOServiceItemDomesticCrating",
                        "moveTaskOrderID": pm.environment.get("moveTaskOrderID"),
                        "mtoShipmentID": pm.environment.get("mtoShipmentID"),
                    })
                } 
            }

        pm.sendRequest(postServiceItemCrating, (error, response) => {
            const serviceItems = response.json()
            console.log(error ? error : serviceItems);
            console.log("CREATED SERVICE ITEM")


            cratingServiceItem = serviceItems[0]
            console.log(cratingServiceItem)
            console.log(response.code)
            if (response.code == 200) {``
                template += `
                <div class="margin-top-4 margin-bottom-2">
                <button class="usa-button" id="serviceItem" onclick="showCratingUpdate()">Create a Service Item for Crating</button>
                </div>
                <div class="hide" id="cratingServiceItem">
                <table class="usa-table usa-table--borderless usa-table--striped">
                <caption>Crating Service Item</caption>

                <tbody>
                    <tr>
                    <th scope="row">Service Item ID</th>
                    <td>{{cratingServiceItem.id}}</td> 
                    </tr>
                    <tr>
                    <th scope="row">Length</th>
                    <td>{{cratingServiceItem.crate.length}}</td>
                    </tr>

                    <tr>
                    <th scope="row">Width</th>
                    <td>{{cratingServiceItem.crate.width}}</td>
                    </tr>

                    <tr>
                    <th scope="row">Height</th>
                    <td>{{cratingServiceItem.crate.height}}</td>
                    </tr>
                </tbody>
                </table>
                </div>

                <script>
                function showCratingUpdate(){
                    // Show updated crating table 
                    cratingServiceItem = document.getElementById("cratingServiceItem");
                    cratingServiceItem.className = 'show';

                    // Change alert text
                    alert = document.getElementById("alert-heading");
                    alert.innerText = "Crating Service Item created";
                }
                </script>
                `
            pm.visualizer.set(template, {
                cratingID : cratingServiceItem.id,
                response: responseJSON,
                shipment: shipment,
                cratingServiceItem: cratingServiceItem
            })
            }
        });

            // SHUTTLING
            const postServiceItemShuttling = {
                url: pm.environment.get("baseUrl") + '/mto-shipments/',
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'If-Match': pm.environment.get("mtoShipmentETag")
                },
                body: {
                    mode: 'raw',
                    raw: JSON.stringify({
                        "modelType": "MTOServiceItemShuttle",
                        "reServiceCode": "DOSHUT",
                        "reason": "Storage items need to be picked up.",
                        "description": "Things to be moved to the place by shuttle.",
                        "estimatedWeight": 4200,
                        "actualWeight": 4000,
                        "moveTaskOrderID": pm.environment.get("moveTaskOrderID"),
                        "mtoShipmentID": pm.environment.get("mtoShipmentID"),
                    })
                } 
            }

        pm.sendRequest(postServiceItemShuttling, (error, response) => {
            const serviceItems = response.json()
            console.log(error ? error : serviceItems);
            console.log("CREATED SHUTTLING SERVICE ITEM*****")

            shuttlingServiceItem = serviceItems[0]
            console.log(serviceItems)
            console.log(shuttlingServiceItem)
        const responseJSON = pm.response.json;
            console.log(response)
            if (response.code == 200) {``
                template += `
                    <div class="margin-top-4 margin-bottom-2">
                    <button class="usa-button" id="serviceItem" onclick="showShuttlingUpdate()"> Create a Service Item for Shuttling</button>
                    </div>
                    <div class="hide" id="shutllingServiceItem">
                    <table class="usa-table usa-table--borderless usa-table--striped">
                    <caption>Shuttling Service Item</caption>

                    <tbody>
                        <tr>
                        <th scope="row">Shuttling Service Item ID</th>
                        <td>{{shuttlingServiceItem.id}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Estimated Weight</th>
                        <td>{{shutllingServiceItem.estimatedWeight}}</td>
                        </tr>

                        <tr>
                        <th scope="row">Actual Weight</th>
                        <td>{{shuttlingServiceItem.actualWeight}}</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>

                    <script>
                    function showShuttlingUpdate(){
                        // Show updated shuttling table 
                        shuttlingServiceItem = document.getElementById("shuttlingServiceItem");
                        shuttlingServiceItem.className = 'show';

                        // Change alert text
                        alert = document.getElementById("alert-heading");
                        alert.innerText = "Shuttling Service Item created";
                    }
                    </script>
                    `

            pm.visualizer.set(template, {
                response: responseJSON,
                cratingServiceItem: cratingServiceItem,
                shuttlingServiceItem: shuttlingServiceItem,
                shipment: shipment
            })
            }
        });

          const postServiceItemUncrating = {
                url: pm.environment.get("baseUrl") + '/mto-shipments/' + pm.environment.get("mtoShipmentID"),
                method: 'PATCH',
                header: {
                    'Content-Type': 'application/json',
                    'If-Match': pm.environment.get("mtoShipmentETag")
                },
                body: {
                    mode: 'raw',
                    raw: JSON.stringify({
                        "crate": {
                            "height": 3000,
                            "length": 3000,
                            "width": 4000
                        },
                        "description": "uncrating grandfather clock",
                        "item": {
                            "height": 2000,
                            "length": 2000,
                            "width": 3000
                        },
                        "reServiceCode": "DCRT",
                        "reason": null,
                        "modelType": "MTOServiceItemDomesticCrating",
                        "moveTaskOrderID": pm.environment.get("moveTaskOrderID"),
                        "mtoShipmentID": pm.environment.get("mtoShipmentID"),
                    })
                } 
            }    
        }

          pm.sendRequest(postServiceItemUncrating, (error, response) => {
            const uncrating = response.json()
            console.log(error ? error : uncrating);
            console.log("CREATED SERVICE ITEM*****")

            template += `
        <div class="margin-top-4 margin-bottom-2">
          <button class="usa-button" id="uncrating" onclick="showUpdate()">Create a Service Item for Uncrating</button>
        </div>
        <div class="hide" id="updatedShipment">
          <table class="usa-table usa-table--borderless usa-table--striped">
          <caption>Uncrating Service Item</caption>

          <tbody>
              <tr>
              <th scope="row">Service Item ID</th>
              <td>{{uncrating.ID}}</td>
            </tr>
            <tr>
              <th scope="row">Length</th>
              <td>{{uncrating.length}}</td>
            </tr>

            <tr>
              <th scope="row">Width</th>
              <td>{{uncrating.width}}</td>
            </tr>

            <tr>
              <th scope="row">Height</th>
              <td>{{uncrating.height}}</td>
            </tr>
          </tbody>
        </table>
        </div>

        <script>
          function showUpdate(){
            // Show updated uncrating table 
            cratingServiceItem = document.getElementById("cratingServiceItem");
            cratingServiceItem.className = 'show';

            // Change alert text
            alert = document.getElementById("alert-heading");
            alert.innerText = "Uncrating Service Item created";
          }
        </script>
          `
          const responseJSON = pm.response.json;
            console.log(response)
            if (response.code == 200) {``
              pm.visualizer.set(template, {
                response: responseJSON,
                uncrating: uncrating,
              })
            }
          });






        template += `
        <div class="margin-top-4 margin-bottom-2" id="serviceItemButton">
          <button class="usa-button" id="reqPayment" onclick="showMsg()">Create Service Item</button>
        </div>
        <div class="hide" id="serviceItem">
          <div class="usa-alert usa-alert--success" id="alert" >
            <div class="usa-alert__body">
              Service Item created.
            </div>
          </div>
        </div>
        <script>
          function showMsg(){
            // Show updated shipment table 
            update = document.getElementById("serviceItem");
            update.className = 'show';

            button = document.getElementById("serviceItemButton");
            button.className = 'hide';

            // Change alert text
            alert = document.getElementById("alert-heading");
            alert.innerText = "Service Item Requested";
          }
        </script>`
        // display shuttling estimated weights in addition to "Service Item created" text
        console.log ("WHERE IS THE RESPONSE?")
            if (response.code == 200) {``
              pm.environment.set("mtoServiceItem", postServiceItem.id)
              pm.visualizer.set(template, {
                response: responseJSON,
                status: "SUBMITTED",
              })
            }

    })
  };

