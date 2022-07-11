# :paperclip: Klimb.io
A node.js application to add candidate records from Excel to mongo database


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
