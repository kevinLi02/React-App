from urllib.request import urlopen as uOpen
from bs4 import BeautifulSoup as bs
from typing import List
import json

def open_and_parse(url: str) -> any:
    """Opens the given url and reads it using beautiful soup and returns the parsed html
    """
    # gets the url and reads it
    client = uOpen(url)
    html = client.read()
    client.close()

    # parses the html code and returns it
    return bs(html, 'html.parser')


def extract(champ_list: List[str]) -> None:
    """Extracts the champion name, winrate, and sample size from the op.gg website
    """
    url = 'https://na.op.gg/champion/statistics'
    # calls the open_and_parse function
    page_soup = open_and_parse(url)
    
    # extract the important information
    jungle_champs = page_soup.find("tbody", {'class': 'tabItem champion-trend-tier-JUNGLE'})
    values = jungle_champs.findAll('td', {'class': 'champion-index-table__cell '
                                                   'champion-index-table__cell--value'})
    champion_data = jungle_champs.findAll('div', {'class': 'champion-index-table__name'})
    # stores the necessary information in lists
    
    # uses lee sin as the default champ for sample size info
    lee_sin_page = open_and_parse('https://na.op.gg/champion/leesin/statistics/jungle/build')
    champ_stats = lee_sin_page.find('td', {
                'class': 'champion-overview__stats champion-overview__stats--pick'}).text
    champ_stats = champ_stats.strip('\n')
    champ_stats = champ_stats.split('\n')
    leesin_games = int(champ_stats[1].replace(',', ''))
    leesin_pick_percent = float(champ_stats[0].replace('%', '')) / 100
    sample_lee_sin = leesin_games / leesin_pick_percent

    lee_sin_rates = lee_sin_page.findAll('div', {
                'class': 'champion-stats-trend-rate'})
    lee_sin_pick_rate = float(lee_sin_rates[1].getText().replace('%', ''))
    sample_total = sample_lee_sin / lee_sin_pick_rate
    
    array = []
    #stores the information
    for i in range(len(champion_data)):
        champ = champion_data[i].getText()
        if champ in champ_list:
            sample = values[i * 3 + 1].getText()
            sample = round(float(sample.replace('%', '')) * sample_total)
            winrate = float(values[i * 3].getText().replace('%', ''))

            champ_dict = {}
            champ_dict['name'] = champ
            champ_dict['winrate'] = winrate
            champ_dict['sample'] = sample
            array.append(champ_dict)
   
    # uses a function from the export file to store the data in a csv file
    with open('react-client/public/opgg_data.json', 'w') as jsonFile:
      json.dump(array, jsonFile)
      jsonFile.close()

