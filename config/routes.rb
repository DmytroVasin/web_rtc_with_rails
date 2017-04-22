Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  resources :dashboards do
    collection do
      get 'call'
      get 'stop'
      get 'ignore'
      get 'connect'
      get 'disconnect'
    end
  end

  root 'welcome#index'

  get 'signup', to: "registrations#new"
  post 'signup', to: "registrations#create"

  get 'login', to: "sessions#new"
  post 'login', to: "sessions#create"
  delete 'logout', to: "sessions#destroy"
end
