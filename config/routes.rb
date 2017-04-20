Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  root 'rooms#index'

  resources :rooms, only: [:index, :new, :create, :show]
end
