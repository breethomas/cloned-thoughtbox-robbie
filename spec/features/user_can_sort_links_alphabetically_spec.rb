require 'rails_helper'

RSpec.feature "User sort alphabetically" do
  scenario "A should be before B", :js => true do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "B", url: "https://www.google.com")
    user.links.create(title: "A", url: "https://www.google.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    links = page.all(".link-container")

    expect(links[0].find(".title").text).to have_content "B"
    expect(links[1].find(".title").text).to have_content "A"

    click_button("Sort Link Titles Alphabetically")

    sortedLinks = page.all(".link-container")

    expect(sortedLinks[0].find(".title").text).to have_content "A"
    expect(sortedLinks[1].find(".title").text).to have_content "B"
  end
end
