Rails.application.routes.draw do
  resources :users, only: [:new, :create]

  resources :links, only: [:index, :create, :update]

  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  root to: "links#index"
end
