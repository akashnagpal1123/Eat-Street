from selenium import webdriver
from selenium.webdriver.chrome.options import Options
options = Options()
# add_argument parameter tells Chrome browser that it should be run without UI (Headless)
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)
driver.get("http://www.amazon.com")
driver.quit()