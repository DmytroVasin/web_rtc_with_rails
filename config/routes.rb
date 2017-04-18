Rails.application.routes.draw do
  resources :rooms, only: [:index, :new, :create, :show]
end
