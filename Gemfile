source 'http://rubygems.org'

gem 'rails', '3.0.3'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'haml'
gem 'simple_form'  #remember to run: rails generate simple_form:install
gem 'sqlite3-ruby', :require => 'sqlite3'


group :test do

  gem 'test-unit'
  gem 'shoulda'
  gem 'factory_girl_rails'
  gem 'faker'
end

group :development do
  #GENERATORS
  #Rails 3 compatible generators for gems that don’t have them yet
  gem 'rails3-generators'

  #generator to produce haml templates instead of default erb for scaffolds etc
  #https://github.com/indirect/haml-rails
  gem "haml-rails"

  #jquery generator for rails : https://github.com/indirect/jquery-rails
  #Then, run bundle install. To invoke the generator, run:
  #rails generate jquery:install #--ui to enable jQuery UI --version to install specific version of JQuery (default is 1.4.2)
  #You're done! Don't forget to output csrf_meta_tag somewhere inside your <head> tag in your layout!
  gem "jquery-rails"
end



