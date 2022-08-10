# :paperclip: Klimb

A node.js application to add candidate records from Excel to mongo database

![2022-07-11-22-34-59-trim_kZzA1y0t](https://user-images.githubusercontent.com/107871742/178325696-86656f14-c841-418f-af6d-9fe248c7b5d6.gif)

## :closed_book:  Objective

● Make a node.js application to add candidate records from Excel to mongo database

## :orange_book: Requirements

● A web landing page as per wireframe

● Provide an excel upload option

● Success or Error Message

## :ledger: Tech stack

● Node.js - mandatory

● MongoDB - mandatory

● We can choose rest of the stack

## :green_book: Technical design

● Backend should have logical separation of Model & Controller

● Demonstrate the use of callbacks

## :blue_book: Data handling

● Add all properties defined in Excel into a mongo collection

● All properties can be stored as strings or any data type of your choice

## :ledger: Async-each-series

● Use async-each-series to process one candidate at a time, after reading from excel

● This has to be implemented in the API code

## :notebook_with_decorative_cover: Unique records

● Email id should be unique

● This validation should be implemented in the API code

● Duplicate check has to be done for each row against the database using a mongo query

● Skip row if duplicate exists in database

## :notebook: Test Data

● Use enclosed excel for test data

## :closed_book: API Response

● Return success if excel is processed

# Developed Solution

● Designed a Node.js application to add candidate records from Excel and it gets added to MongoDB

## Steps

### :one: Landing Page

This is the landing page of the website.

![Screenshot (3742)](https://user-images.githubusercontent.com/107871742/178321664-ea74146c-a81d-4200-ac45-10871f92ecb9.png)

### :two: Choose File

Choose the file by clicking on "choose file".

![Screenshot (3743)](https://user-images.githubusercontent.com/107871742/178322066-ddc09ace-ebd7-4743-8718-1c53a2f6a0a8.png)

![Screenshot (3745)](https://user-images.githubusercontent.com/107871742/178322139-7a35a0c6-61f3-44c1-bdba-9f6cc3a6ac13.png)


### :three: Upload Excel

Upload the excel file in .csv format by selecting the file

![Screenshot (3746)](https://user-images.githubusercontent.com/107871742/178323606-d16a46ad-637b-4f37-bb24-cdda90e542ee.png)


### :four: MongoDB

Connect MongoDB to view the records

![Screenshot (3747)](https://user-images.githubusercontent.com/107871742/178323758-e61af69b-f4f0-4644-b1fa-ff2a36deebff.png)


View the records in raw form or in table form

![Screenshot (3748)](https://user-images.githubusercontent.com/107871742/178323819-0c50cfc8-b2a5-415f-83ec-35e11c300e93.png)

![Screenshot (3749)](https://user-images.githubusercontent.com/107871742/178323883-ad0d2ef1-938f-4392-ae5d-469223f8b3d0.png)


### Full Video Demo

![2022-07-11-22-34-59-trim_kZzA1y0t](https://user-images.githubusercontent.com/107871742/178325804-91222232-823f-4903-aa0e-6403e7ee899e.gif)

