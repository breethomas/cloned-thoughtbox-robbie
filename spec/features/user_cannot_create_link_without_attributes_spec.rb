require 'rails_helper'

RSpec.feature "User cannot create new link" do
  xscenario "they try to create link without title", :js => true do
    user = User.create(email: "test", password: "password")
    user.links.create(title: "NEW", url: "https://www.google.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path
    fill_in "Title", with: "New Link"
    click_button("Submit Link")

    sleep(5)

    expect(page).to have_content "Url can't be blank"
  end
end
