# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. **Generating custom IDs by Facilities**
  # Acceptance Criteria
  - The program should run within the maximum time of 100 milliseconds.
  - ID should contain index zero of first name and last name of agent.
  - Each ID must be unique for each Agents

   # Time/Effort estimates
   - Within 30 to 60 minutes
   - Validation to make sure each IDs is unique per Agent

    # Implementation Details
    - Prompt facilities to input custom ID for agent starting with first index of first name and last name of agent.
    - Validate if ID already exist for another agent.
    - If it already exist, prompt user to enter another ID.
    - If it does not exist, save agent with the ID.
2. **Saving custom IDs Per Agent**
    # Acceptance Criteria
  - The program should run within the maximum time of 100 milliseconds.

   # Time/Effort estimates
   - Within 30 to 60 minutes.
   - Validation to make sure each IDs is unique per Agent.

    # Implementation Details
    - Create space in the database to save custom ID.
    - Create a function that find Agent By ID and update the custom ID field.
    - Query the other agents to be sure the custom id has not been assigned to other agent.
    - If it has been assigned, throw an error ID already exist.
    - Else update the custom Id field of agent with the ID.

3. **Adding IDs to generated reports**

    # Acceptance Criteria
  - The program should run within the maximum time of 200 milliseconds.
  - Report should include custom ID input by the user.
  - Report should be detailed.

   # Time/Effort estimates
   - Within 30 to 60 minutes.
   - Validation to make sure reports contain the agent assigned custom ID.

    # Implementation Details
    - Check for all possible edge cases to improve user experience.
    - Check for module that convert list to pdf.
    - Check number of support for the Module, also check if it's not deprecated.
    - Query the database for report list of reports and pass it into pdf format.
    - Send PDF format to the user.
