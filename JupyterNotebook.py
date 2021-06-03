import boto3
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# create IoT Analytics client
client = boto3.client('iotanalytics')

dataset = "proyect_iot_dataset"
dataset_url = client.get_dataset_content(datasetName = dataset)['entries'][0]['dataURI']

# start working with the data


dataset_url

df = pd.read_csv(dataset_url, header=0)
df


 plt.plot(df["humedad"].tail(20),marker='x', linestyle=':', color='b', label = "humedad")
 plt.plot(df["temperatura"].tail(20),marker='*', linestyle='-', color='g', label = "temperatura")
 plt.legend()

 plt.hist(df['distancia'], bins=20)


 plt.hist(df['luminosidad'], bins=20)

 plt.plot(df["humedad"].tail(50),marker='x', linestyle=':', color='b', label = "humedad")
 plt.plot(df["temperatura"].tail(50),marker='*', linestyle='-', color='g', label = "temperatura")
 plt.legend()