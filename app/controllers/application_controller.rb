class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  # Include the module we just created.
  include SSLWithConfiguredPort
  # Instead of *force_ssl* we use *force_ssl_with_configured_port* that will read
  # the SSL port from the config. We added a *if* so that this will only run
  # if the *use_ssl?* method below returns true.
  force_ssl_with_configured_port if: :use_ssl?

  private
    # This will return true if the config has *config.use_ssl = true*
    def use_ssl?
      Rails.application.config.try(:use_ssl).is_a?(TrueClass)
    end
end
