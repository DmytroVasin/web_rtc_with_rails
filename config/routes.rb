Rails.application.routes.draw do
  root 'rooms#index'

  resources :rooms, only: [:index, :new, :create, :show]
end
