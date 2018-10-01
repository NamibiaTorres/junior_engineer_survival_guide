## Steps to Building a Simple Rails App
##### without active record, turbolinks, or mini test

```
rails new blog --skip-active-record --skip-coffee --skip-turbolinks --skip-test

git init

git add .

git commit -m "initial commit"

history
```

### Add to your Gemfile:

```
# Gemfile
group :development, :test do
  gem "awesome_print"
  gem "factory_bot_rails"
  gem "pry-byebug"
  gem "rspec-rails", "3.7.2"
end

group :test do
  gem "capybara-webkit", "1.14.0"
  gem "database_cleaner"
  gem "launchy"
  gem "shoulda-matchers", git: "https://github.com/thoughtbot/shoulda-matchers.git", branch: "rails-5"
  gem "timecop"
  gem "webmock"
end
```

### Add RSpec

```
rails g rspec:install

—commit

bundle check
mkdir spec/support
touch spec/support/database_cleaner.rb

—commit:  gc -m "require files in spec/support"

rails g resource post title description:text body:text published_at:datetime
```


### Creating an Example app:

```
JEP Book App:

rails new book --skip-active-record --skip-coffee --skip-turbolinks --skip-test

rails g resource book title author description:text body:text published_at:datetime
```


#### Namibia Torres
