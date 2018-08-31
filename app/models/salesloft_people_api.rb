class SalesloftPeopleApi
  include HTTParty

  def self.search_all_people
    people = get(ENV["SALESLOFT_API"] + "people.json", {
        headers: {"Authorization" => "Bearer " + ENV["SALESLOFT_APPLICATION_SECRET"]}
      })
    format_people_response(people["data"])

  end

  def self.format_people_response(people_array)
    people_array.map do |person|
      format_person(person)
    end
  end

  def self.format_person(person)
    {
      id: person["id"],
      display_name: person["display_name"],
      email_address: person["email_address"],
      job_title: person["title"]
    }
  end

end
