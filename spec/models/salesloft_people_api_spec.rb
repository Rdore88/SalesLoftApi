require 'rails_helper'

RSpec.describe SalesloftPeopleApi, type: :model do

  it "receives a list of people from salesloft and organizes the response" do
    stub_request(:get, ENV["SALESLOFT_API"] + "people.json")
      .to_return(
        body: File.read(Rails.root.join("spec", "stubbed_requests", "all_people_search.json")),
        headers: {'Content-Type' => 'application/json'}
      )

    all_people = SalesloftPeopleApi.search_all_people

    # tests to make sure it receives an array
    expect(all_people.length).to be > 1

    # tests to make sure its organized
    expect(all_people.first.keys.length).to eq(4)
  end

end
