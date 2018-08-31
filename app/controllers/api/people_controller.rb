class Api::PeopleController < Api::BaseController
  respond_to :json

  def get_all_people
    render json: SalesloftPeopleApi.search_all_people
  end
end
