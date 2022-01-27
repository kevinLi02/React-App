from selenium import webdriver
from typing import List
import json

def open_and_parse(url: str) -> any:
    """Opens the given url and reads it using selenium and returns the parsed html
    """
    # uses selenium to open
    options = webdriver.ChromeOptions()
    options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

    driver = webdriver.Chrome(
        'C:/Users/kevin_skvd1dq/OneDrive/Documents/UofT/pythonProjects/WebScraping-Project/python-server/chromedriver.exe')
    driver.get(url)
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    driver.find_element_by_css_selector('div.rt-th.tier').click()

    # returns the html code
    return driver


def extract(champ_list: List[str]) -> None:
    """Extracts the champion name, winrate, and sample size from the u.gg website
    """
    url = "https://u.gg/lol/jungle-tier-list"
    driver = open_and_parse(url)

    # finds the important information
    data = driver.find_elements_by_class_name('rt-tr-group')
    
    # stores the necessary information into lists
    array = []
    for line in data:
        text = line.text
        split_text = text.split('\n')
        if split_text[1] in champ_list:
            name = split_text[1]
            winrate = float(split_text[3].replace('%', ''))
            sample = int(split_text[6].replace(',', ''))

            champ_dict = {}
            champ_dict['name'] = name
            champ_dict['winrate'] = winrate
            champ_dict['sample'] = sample
            array.append(champ_dict)
    driver.close()

    # uses a function from the export file to store the data in a csv file
    with open('react-client/public/ugg_data.json', 'w') as jsonFile:
      json.dump(array, jsonFile)
      jsonFile.close()
