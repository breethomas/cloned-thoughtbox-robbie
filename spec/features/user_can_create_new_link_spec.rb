require 'rails_helper'

RSpec.feature "User can create new link" do
  scenario "they create link and see it on their links index" do
    user = User.create(email: "Robbie1", password: "password")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path
    fill_in "Title", with: "TEST"
    fill_in "Url", with: "https://www.google.com"
    click_on("Submit Link")

    expect(page).to have_content "TEST"
    expect(page).to have_content "https://www.google.com"
  end
end
