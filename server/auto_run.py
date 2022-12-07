import excel_to_mongodb

import schedule

schedule.every().minute.do(excel_to_mongodb) # eroare

while 1:
    schedule.run_pending()
