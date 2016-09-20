require 'rails_helper'

RSpec.feature "User can edit a link" do
  scenario "they edit the link and see it on their links index" do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "NEW", url: "https://www.google.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path
    click_on("Edit Link")

    fill_in "Title", with: "edited"
    click_on("Edit Link")

    expect(page).to have_content "edited"
    expect(page).to have_content "https://www.google.com"
  end

  scenario "they cannot edit a link with a bad URL" do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "NEW", url: "https://www.google.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path
    click_on("Edit Link")

    fill_in "Url", with: "www.google.com"
    click_on("Edit Link")

    expect(page).to have_content "Url is not a valid URL"
  end
end
