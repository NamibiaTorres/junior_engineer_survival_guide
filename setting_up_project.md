### Prereqs:

```
brew install openssl
brew install postgresql postgis
brew services start postgresql
env LDFLAGS="-L/usr/local/opt/openssl/lib" CPPFLAGS="-I/usr/local/opt/openssl/include" pipenv install psycopg2
```

OpenSSL:
* OpenSSL is a robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. It is also a general-purpose cryptography library. 
* Why do we need it?

PostGIS:
* PostGIS provides spatial objects for the PostgreSQL database, allowing storage and query of information about location and mapping.
* Use only if you need it for a specific project
