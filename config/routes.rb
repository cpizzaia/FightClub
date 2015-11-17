Rails.application.routes.draw do
  root to: "users#new"
  resources :users
  resource :session

  namespace :api, defaults: {format: :json} do
    resources :users
  end
end
