Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users
  resource :session

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :groups
    resources :events
    resources :users_groups
    resources :users_events
    resources :comments
    resource :session
    resources :search, only: [:index]
  end
end
