from urllib.request import Request, urlopen as uOpen
from bs4 import BeautifulSoup as bs
from typing import List
import json

def open_and_parse(url: str) -> any:
    """Opens the given url and reads it using beautiful soup and returns the parsed html
    """
    # gets the url and reads it
    hdr = {'User-Agent': 'Mozilla/5.0'}
    req = Request(url,headers=hdr)

    client = uOpen(req)
    html = client.read()
    client.close()

    # parses the html code and returns it
    return bs(html, 'html.parser')
    

def extract(champ_list: List[str]) -> None:
    """Extracts the champion name, winrate, and sample size from the op.gg website
    """
    url = 'https://www.leagueofgraphs.com/champions/builds/jungle/sr-ranked'
    # calls the open_and_parse function
    page_soup = open_and_parse(url)

    # extract the important information
    champ_data = page_soup.find("table", {'class': 'data_table with_sortable_column'})

    names_list = champ_data.findAll("span", {'class': 'name'})
    values = champ_data.findAll('progressbar')
    total_sample = page_soup.find("span", {'id': 'matchesCountNumber'}).getText()
    total_sample = float(total_sample.replace(',', '')) * 5

    # stores the necessary information in lists
    array = []
    for i in range(len(names_list)):
      if names_list[i].getText().strip() in champ_list:
        name = names_list[i].getText().strip()
        winrate = round(float(values[i * 3 + 1]['data-value']) * 100, 2)
        sample = round(float(values[i * 3]['data-value']) * total_sample)

        champ_dict = {}
        champ_dict['name'] = name
        champ_dict['winrate'] = winrate
        champ_dict['sample'] = sample
        array.append(champ_dict)

    # uses a function from the export file to store the data in a csv file
    
    with open('react-client/public/log_data.json', 'w') as jsonFile:
      json.dump(array, jsonFile)
      jsonFile.close()
