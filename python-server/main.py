import opgg
import leagueofgraphs as log
import ugg
import json

champions = ['Xin Zhao', 'Nocturne', 'Shaco', 'Lee Sin', "Kha'Zix", 'Fiddlesticks', 'Kayn',
             'Shyvana', 'Evelynn', 'Karthus', 'Kindred', 'Warwick', 'Hecarim', 'Rammus', 'Volibear',
             'Ekko', 'Olaf', 'Nunu & Willump', 'Zac', 'Master Yi', 'Trundle', 'Jarvan IV', 'Elise',
             'Graves', "Rek'Sai", 'Ivern', 'Vi', 'Udyr', 'Rengar', 'Sejuani', 'Nidalee', 'Gragas', 
             'Lillia', 'Viego', 'Taliyah']

def main() -> None:
    """Main function

    """
    opgg.extract(champions)
    ugg.extract(champions)
    log.extract(champions)

    # open csv files and reads
    with open("react-client/public/opgg_data.json") as jsonFile:
        opgg_data = json.load(jsonFile)
        jsonFile.close()
    with open("react-client/public/ugg_data.json") as jsonFile:
        ugg_data = json.load(jsonFile)
        jsonFile.close()
    with open("react-client/public/log_data.json") as jsonFile:
        log_data = json.load(jsonFile)
        jsonFile.close()

    array = []
    

    for i in range(len(champions)):
        for j in range(len(champions)):
            if opgg_data[j]['name'] == champions[i]:
                opgg_i = j
        for j in range(len(champions)):
            if ugg_data[j]['name'] == champions[i]:
                ugg_i = j
        for j in range(len(champions)):
            if log_data[j]['name'] == champions[i]:
                log_i = j
        sample = opgg_data[opgg_i]['sample'] + ugg_data[ugg_i]['sample'] + log_data[log_i]['sample']

        winrate = opgg_data[opgg_i]['winrate'] * (opgg_data[opgg_i]['sample'] / sample) + ugg_data[ugg_i]['winrate'] * (ugg_data[ugg_i]['sample'] / sample) + log_data[log_i]['winrate'] * (log_data[log_i]['sample']/ sample)
        winrate = round(winrate, 2)

        champ_dict = {}
        champ_dict['name'] = champions[i]
        champ_dict['winrate'] = winrate
        champ_dict['sample'] = sample
        array.append(champ_dict)

    # uses a function from the export file to store the data in a csv file
    with open('react-client/public/aggregate_data.json', 'w') as jsonFile:
      json.dump(array, jsonFile)
      jsonFile.close()

main()
