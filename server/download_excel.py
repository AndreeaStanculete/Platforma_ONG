from urllib.request import Request, urlopen, urlretrieve
from bs4 import BeautifulSoup

url = "https://www.just.ro/registrul-national-ong"
req = Request(url)
a = urlopen(req).read()
soup = BeautifulSoup(a, 'html.parser')
x = (soup.find_all('a'))

for i in x:
    if str(i).find('href'):
        str1 = str(i).rsplit('href="', 1)

        if len(str1)==2:
            str2 = str(str1[1]).rsplit('"', 1)[0]

        excel = str(str2).rsplit('" style=', 1)[0]

        if excel.endswith("asociatii.xlsx"):
            urlretrieve(excel, './ong.xlsx')




















# for p in i:


# print(file_name)

# link = i.extract().get_href()

# print(link)

# url_new = url + file_name

# print(url_new)


# from selenium import webdriver
# from selenium.webdriver.common.by import By
#
# options = webdriver.ChromeOptions()
#
# preferences = {"download.default_directory": "C:/Users/Irina/Desktop/Proiect - PI", "safebrowsing_enabled": "false"}
#
# options.add_experimental_option("prefs", preferences)
#
# driver = webdriver.Chrome(chrome_options=options)
#
# driver.get("https://www.just.ro/registrul-national-ong")
#
# driver.find_element(By.XPATH, '//*[@id="xtqinjkawtxbanyglgchpnmjbsuulbddbbst"]/div/div/div[4]/div/div/div/div/div/div/p[3]/a[2]/strong').click()
