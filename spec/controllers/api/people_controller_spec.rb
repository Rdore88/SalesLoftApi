require 'rails_helper'

RSpec.describe Api::PeopleController, type: :controller do

  it "gets a list of people from the endpoint" do
    stub_request(:get, ENV["SALESLOFT_API"] + "people.json")
      .to_return(
        body: File.read(Rails.root.join("spec", "stubbed_requests", "all_people_search.json")),
        headers: {'Content-Type' => 'application/json'}
      )

    get :get_all_people

    all_people = JSON.parse(response.body)

    # tests to make sure it receives an array
    expect(all_people.length).to be > 1

    #tests a specific part of the response
    expect(all_people.first["display_name"]).to eq("Marisa Casper")
  end

end
