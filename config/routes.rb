Rails.application.routes.draw do
  namespace :api do
    get 'people/get'
  end

  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  namespace :api, defaults: { format: "json" } do
    get :me, to: "me#me"
    get :all_people, to: "people#get_all_people"
  end

  root to: "main#index"
end
