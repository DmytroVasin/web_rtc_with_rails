Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  root 'rooms#index'

  resources :users, only: [:index, :create]

  resources :dashboards do
    collection do
      get 'call'
      get 'answer'
      get 'ignore'
    end
  end

  resources :rooms, only: [:index, :new, :create, :show] do
    collection do
      get 'call'
    end
  end
end
