# FoodChoiceTask

Adapted for use on Pavlovia by Anusha Phadnis (2026) using the existing task developed by Caitlin Lloyd and Columbia Center for EDs (https://github.com/Columbia-Center-for-EDs/Food-Choice-Task)

References:
Steinglass, J., Foerde, K., Kostro, K., Shohamy, D., & Walsh, B. T. (2015). Restrictive food intake as a choice—A paradigm for study. International Journal of Eating Disorders, 48(1), 59-66.

Foerde, K., Steinglass, J. E., Shohamy, D., & Walsh, B. T. (2015). Neural mechanisms supporting maladaptive food choices in anorexia nervosa. Nature neuroscience, 18(11), 1571-1573.

Instructions to run:

1. There are multiple parameters we are using for this task, and they can either be attached to the URL or entered on screen with the participant, whichever one is preferable. The following are the parameters and how to determine their values: 

  A) participant: The participant ID
  
  B) condition: 1 for ratings going from bad to good/unhealthy to healthy; 2 for ratings going from good to bad/healthy to unhealthy 
  
  C) order: TH for taste then health; HT for health then taste; can leave it blank if you're only running the choice block 
  
  D) h_list: 1, 2, 3, 4, 5 or 6 (health block list number) 
  
  E) t_list: 1, 2, 3, 4, 5 or 6 (taste block list number) 
  
  F) c_list: 1, 2, 3, 4, 5 or 6 (choice block list number) 
  
  G) run_h: 1 if you want to run the health block; 0 if not 
  
  H) run_t: 1 if you want to run the taste block; 0 if not 
  
  I) run_c: 1 if you want to run the choice block; 0 if not 
  
  J) ref_food_item: This parameter is used only if you are running the choice block separately from the health and taste blocks. If they are being run at the same time, then this can be left blank. More details about how       to get the value for ref_food_item are in the next point. 

2. If the health and taste blocks are not run at the same time as the choice block, there is no way for the code to know the reference food for the choice block; so we will be calculating it separately in that case. To do this, you will need to upload the participant's existing health and taste rating file(s) to the notebook "GetReferenceFood.ipynb" and run the code cell corresponding to the specific situation. 
Once you get the reference food item from this code, you will input that as the parameter when running the choice block for the ppt. 

3. Because of how the calculation of the reference food item works, we can only do the following three options:
  A) Run all three blocks at the same time
  B) Run health and taste in one run, and choice in the next run
  C) Run all three blocks in separate runs 
  i.e., if you initially tried to run all three blocks, but it ran only the health block and then something went wrong, you must run ONLY the taste block in the next run. Running just taste and choice won't work because     we won't have any way to know the reference food item. 

4. Only "order" and "ref_food_item" can be left blank. All the other parameters must have values. For example, even if you don't want to run the health block, just put a random number for h_list, otherwise the code will break. 

5. If you would prefer to not let the ppt enter the parameter values/remote control their screen, you can construct the task URL using the base URL in point 1, and then separating each parameter by &, example:
https://run.pavlovia.org/anushaphadnis/FCT/?participant=1234&condition=1&order=TH&h_list=1&t_list=2&c_list=3&run_h=1&run_t=1&run_c=1&ref_food_item=saltines
