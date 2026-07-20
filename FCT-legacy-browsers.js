/************ 
 * Fct *
 ************/


// store info about the experiment session:
let expName = 'FCT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'condition': '',
    'order': '',
    'h_list': '',
    't_list': '',
    'c_list': '',
    'run_h': '',
    'run_t': '',
    'run_c': '',
    'ref_food_item': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((0.0000, 0.0000, 0.0000)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Welcome_textRoutineBegin());
flowScheduler.add(Welcome_textRoutineEachFrame());
flowScheduler.add(Welcome_textRoutineEnd());
flowScheduler.add(HealthInstruction1_1RoutineBegin());
flowScheduler.add(HealthInstruction1_1RoutineEachFrame());
flowScheduler.add(HealthInstruction1_1RoutineEnd());
flowScheduler.add(HealthInstruction2_1RoutineBegin());
flowScheduler.add(HealthInstruction2_1RoutineEachFrame());
flowScheduler.add(HealthInstruction2_1RoutineEnd());
flowScheduler.add(HealthInstruction3_1RoutineBegin());
flowScheduler.add(HealthInstruction3_1RoutineEachFrame());
flowScheduler.add(HealthInstruction3_1RoutineEnd());
const trials_health1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_health1LoopBegin(trials_health1LoopScheduler));
flowScheduler.add(trials_health1LoopScheduler);
flowScheduler.add(trials_health1LoopEnd);






flowScheduler.add(EndOfBlock_health_1RoutineBegin());
flowScheduler.add(EndOfBlock_health_1RoutineEachFrame());
flowScheduler.add(EndOfBlock_health_1RoutineEnd());
flowScheduler.add(TasteInstruction1RoutineBegin());
flowScheduler.add(TasteInstruction1RoutineEachFrame());
flowScheduler.add(TasteInstruction1RoutineEnd());
flowScheduler.add(TasteInstruction2RoutineBegin());
flowScheduler.add(TasteInstruction2RoutineEachFrame());
flowScheduler.add(TasteInstruction2RoutineEnd());
flowScheduler.add(TasteInstruction3RoutineBegin());
flowScheduler.add(TasteInstruction3RoutineEachFrame());
flowScheduler.add(TasteInstruction3RoutineEnd());
const trials_tasteLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_tasteLoopBegin(trials_tasteLoopScheduler));
flowScheduler.add(trials_tasteLoopScheduler);
flowScheduler.add(trials_tasteLoopEnd);






flowScheduler.add(EndOfBlock_tasteRoutineBegin());
flowScheduler.add(EndOfBlock_tasteRoutineEachFrame());
flowScheduler.add(EndOfBlock_tasteRoutineEnd());
flowScheduler.add(HealthInstruction1_2RoutineBegin());
flowScheduler.add(HealthInstruction1_2RoutineEachFrame());
flowScheduler.add(HealthInstruction1_2RoutineEnd());
flowScheduler.add(HealthInstruction2_2RoutineBegin());
flowScheduler.add(HealthInstruction2_2RoutineEachFrame());
flowScheduler.add(HealthInstruction2_2RoutineEnd());
flowScheduler.add(HealthInstruction3_2RoutineBegin());
flowScheduler.add(HealthInstruction3_2RoutineEachFrame());
flowScheduler.add(HealthInstruction3_2RoutineEnd());
const trials_health2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_health2LoopBegin(trials_health2LoopScheduler));
flowScheduler.add(trials_health2LoopScheduler);
flowScheduler.add(trials_health2LoopEnd);






flowScheduler.add(EndOfBlock_health_2RoutineBegin());
flowScheduler.add(EndOfBlock_health_2RoutineEachFrame());
flowScheduler.add(EndOfBlock_health_2RoutineEnd());
flowScheduler.add(GetReferenceFoodRoutineBegin());
flowScheduler.add(GetReferenceFoodRoutineEachFrame());
flowScheduler.add(GetReferenceFoodRoutineEnd());
flowScheduler.add(ChoiceInstruction1RoutineBegin());
flowScheduler.add(ChoiceInstruction1RoutineEachFrame());
flowScheduler.add(ChoiceInstruction1RoutineEnd());
flowScheduler.add(ChoiceInstruction2RoutineBegin());
flowScheduler.add(ChoiceInstruction2RoutineEachFrame());
flowScheduler.add(ChoiceInstruction2RoutineEnd());
flowScheduler.add(ChoiceInstruction3RoutineBegin());
flowScheduler.add(ChoiceInstruction3RoutineEachFrame());
flowScheduler.add(ChoiceInstruction3RoutineEnd());
const trials_choiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_choiceLoopBegin(trials_choiceLoopScheduler));
flowScheduler.add(trials_choiceLoopScheduler);
flowScheduler.add(trials_choiceLoopEnd);






flowScheduler.add(EndOfBlock_ChoiceRoutineBegin());
flowScheduler.add(EndOfBlock_ChoiceRoutineEachFrame());
flowScheduler.add(EndOfBlock_ChoiceRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/AA026339.png', 'path': 'stimuli/AA026339.png'},
    {'name': 'stimuli/AA026337.png', 'path': 'stimuli/AA026337.png'},
    {'name': 'stimuli/1permilk.jpg', 'path': 'stimuli/1permilk.jpg'},
    {'name': 'stimuli/AA026307.png', 'path': 'stimuli/AA026307.png'},
    {'name': 'stimuli/AA026337.png', 'path': 'stimuli/AA026337.png'},
    {'name': 'stimuli/AA026339.png', 'path': 'stimuli/AA026339.png'},
    {'name': 'stimuli/AA026360.png', 'path': 'stimuli/AA026360.png'},
    {'name': 'stimuli/air popcorn.jpg', 'path': 'stimuli/air popcorn.jpg'},
    {'name': 'stimuli/american cheese.jpg', 'path': 'stimuli/american cheese.jpg'},
    {'name': 'stimuli/apple slices.jpg', 'path': 'stimuli/apple slices.jpg'},
    {'name': 'stimuli/avocado.jpg', 'path': 'stimuli/avocado.jpg'},
    {'name': 'stimuli/baby cheese.jpg', 'path': 'stimuli/baby cheese.jpg'},
    {'name': 'stimuli/bagel and cc.jpg', 'path': 'stimuli/bagel and cc.jpg'},
    {'name': 'stimuli/bagel plain.jpg', 'path': 'stimuli/bagel plain.jpg'},
    {'name': 'stimuli/baguette oil.jpg', 'path': 'stimuli/baguette oil.jpg'},
    {'name': 'stimuli/baked potato.jpg', 'path': 'stimuli/baked potato.jpg'},
    {'name': 'stimuli/banana.jpg', 'path': 'stimuli/banana.jpg'},
    {'name': 'stimuli/broccoli cauliflower.jpg', 'path': 'stimuli/broccoli cauliflower.jpg'},
    {'name': 'stimuli/brownie.jpg', 'path': 'stimuli/brownie.jpg'},
    {'name': 'stimuli/burger.jpg', 'path': 'stimuli/burger.jpg'},
    {'name': 'stimuli/celery and carrot sticks.jpg', 'path': 'stimuli/celery and carrot sticks.jpg'},
    {'name': 'stimuli/Cheese nachos.jpg', 'path': 'stimuli/Cheese nachos.jpg'},
    {'name': 'stimuli/cherries.jpg', 'path': 'stimuli/cherries.jpg'},
    {'name': 'stimuli/cherry tomato.jpg', 'path': 'stimuli/cherry tomato.jpg'},
    {'name': 'stimuli/chicken nuggets2.jpg', 'path': 'stimuli/chicken nuggets2.jpg'},
    {'name': 'stimuli/cookies.jpg', 'path': 'stimuli/cookies.jpg'},
    {'name': 'stimuli/corn cob.jpg', 'path': 'stimuli/corn cob.jpg'},
    {'name': 'stimuli/cucumber slices.jpg', 'path': 'stimuli/cucumber slices.jpg'},
    {'name': 'stimuli/cupcakes am.jpg', 'path': 'stimuli/cupcakes am.jpg'},
    {'name': 'stimuli/doughnuts.jpg', 'path': 'stimuli/doughnuts.jpg'},
    {'name': 'stimuli/eggs.jpg', 'path': 'stimuli/eggs.jpg'},
    {'name': 'stimuli/french fries.jpg', 'path': 'stimuli/french fries.jpg'},
    {'name': 'stimuli/fried eggs.jpg', 'path': 'stimuli/fried eggs.jpg'},
    {'name': 'stimuli/froot loops w milk.jpg', 'path': 'stimuli/froot loops w milk.jpg'},
    {'name': 'stimuli/granola w milk.jpg', 'path': 'stimuli/granola w milk.jpg'},
    {'name': 'stimuli/Grapes.jpg', 'path': 'stimuli/Grapes.jpg'},
    {'name': 'stimuli/green beans.jpg', 'path': 'stimuli/green beans.jpg'},
    {'name': 'stimuli/grilled cheese.jpg', 'path': 'stimuli/grilled cheese.jpg'},
    {'name': 'stimuli/grilled chicken strips.jpg', 'path': 'stimuli/grilled chicken strips.jpg'},
    {'name': 'stimuli/Hershey Kisses.jpg', 'path': 'stimuli/Hershey Kisses.jpg'},
    {'name': 'stimuli/hotdog w must.jpg', 'path': 'stimuli/hotdog w must.jpg'},
    {'name': 'stimuli/ice cream sundae 002.jpg', 'path': 'stimuli/ice cream sundae 002.jpg'},
    {'name': 'stimuli/kiwi.jpg', 'path': 'stimuli/kiwi.jpg'},
    {'name': 'stimuli/lollipops.jpg', 'path': 'stimuli/lollipops.jpg'},
    {'name': 'stimuli/m_and_m.jpg', 'path': 'stimuli/m_and_m.jpg'},
    {'name': 'stimuli/mac & cheese.jpg', 'path': 'stimuli/mac & cheese.jpg'},
    {'name': 'stimuli/mashed potato.jpg', 'path': 'stimuli/mashed potato.jpg'},
    {'name': 'stimuli/mini muffins.jpg', 'path': 'stimuli/mini muffins.jpg'},
    {'name': 'stimuli/mozzarella sticks.jpg', 'path': 'stimuli/mozzarella sticks.jpg'},
    {'name': 'stimuli/mushrooms.jpg', 'path': 'stimuli/mushrooms.jpg'},
    {'name': 'stimuli/orange slices.jpg', 'path': 'stimuli/orange slices.jpg'},
    {'name': 'stimuli/PB.jpg', 'path': 'stimuli/PB.jpg'},
    {'name': 'stimuli/peaches.jpg', 'path': 'stimuli/peaches.jpg'},
    {'name': 'stimuli/pickles.jpg', 'path': 'stimuli/pickles.jpg'},
    {'name': 'stimuli/pizza.jpg', 'path': 'stimuli/pizza.jpg'},
    {'name': 'stimuli/Pretzels.jpg', 'path': 'stimuli/Pretzels.jpg'},
    {'name': 'stimuli/raisin bran w milk.jpg', 'path': 'stimuli/raisin bran w milk.jpg'},
    {'name': 'stimuli/raisins.jpg', 'path': 'stimuli/raisins.jpg'},
    {'name': 'stimuli/reeses.jpg', 'path': 'stimuli/reeses.jpg'},
    {'name': 'stimuli/rice cakes.jpg', 'path': 'stimuli/rice cakes.jpg'},
    {'name': 'stimuli/rigatoni and sauce.jpg', 'path': 'stimuli/rigatoni and sauce.jpg'},
    {'name': 'stimuli/rigatoni.jpg', 'path': 'stimuli/rigatoni.jpg'},
    {'name': 'stimuli/ritz.jpg', 'path': 'stimuli/ritz.jpg'},
    {'name': 'stimuli/salad w chicken.jpg', 'path': 'stimuli/salad w chicken.jpg'},
    {'name': 'stimuli/saltines.jpg', 'path': 'stimuli/saltines.jpg'},
    {'name': 'stimuli/seaweed.jpg', 'path': 'stimuli/seaweed.jpg'},
    {'name': 'stimuli/Skim milk.jpg', 'path': 'stimuli/Skim milk.jpg'},
    {'name': 'stimuli/soup with spoon.jpg', 'path': 'stimuli/soup with spoon.jpg'},
    {'name': 'stimuli/sour patch.jpg', 'path': 'stimuli/sour patch.jpg'},
    {'name': 'stimuli/soy chips.jpg', 'path': 'stimuli/soy chips.jpg'},
    {'name': 'stimuli/steak.jpg', 'path': 'stimuli/steak.jpg'},
    {'name': 'stimuli/strawberries.jpg', 'path': 'stimuli/strawberries.jpg'},
    {'name': 'stimuli/string cheese.jpg', 'path': 'stimuli/string cheese.jpg'},
    {'name': 'stimuli/sushi w_condiments.jpg', 'path': 'stimuli/sushi w_condiments.jpg'},
    {'name': 'stimuli/tacos.jpg', 'path': 'stimuli/tacos.jpg'},
    {'name': 'stimuli/trail mix.jpg', 'path': 'stimuli/trail mix.jpg'},
    {'name': 'stimuli/Tribe hummus pita.jpg', 'path': 'stimuli/Tribe hummus pita.jpg'},
    {'name': 'stimuli/turkey sandwich.jpg', 'path': 'stimuli/turkey sandwich.jpg'},
    {'name': 'stimuli/Whole milk.jpg', 'path': 'stimuli/Whole milk.jpg'},
    {'name': 'stimuli/yellow popcorn.jpg', 'path': 'stimuli/yellow popcorn.jpg'},
    {'name': 'stimuli/yellow rice_beans.jpg', 'path': 'stimuli/yellow rice_beans.jpg'},
    {'name': 'stimuli/yogurt no spoon.jpg', 'path': 'stimuli/yogurt no spoon.jpg'},
    {'name': 'stimuli/yogurt pretzels.jpg', 'path': 'stimuli/yogurt pretzels.jpg'},
    {'name': 'order/Condition_1_HT.xlsx', 'path': 'order/Condition_1_HT.xlsx'},
    {'name': 'order/Condition_1_TH.xlsx', 'path': 'order/Condition_1_TH.xlsx'},
    {'name': 'order/Condition_2_HT.xlsx', 'path': 'order/Condition_2_HT.xlsx'},
    {'name': 'order/Condition_2_TH.xlsx', 'path': 'order/Condition_2_TH.xlsx'},
    {'name': 'lists/foodlist1.csv', 'path': 'lists/foodlist1.csv'},
    {'name': 'lists/foodlist2.csv', 'path': 'lists/foodlist2.csv'},
    {'name': 'lists/foodlist3.csv', 'path': 'lists/foodlist3.csv'},
    {'name': 'lists/foodlist4.csv', 'path': 'lists/foodlist4.csv'},
    {'name': 'lists/foodlist5.csv', 'path': 'lists/foodlist5.csv'},
    {'name': 'lists/foodlist6.csv', 'path': 'lists/foodlist6.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Welcome_textClock;
var welcome;
var welcome_response;
var health_ratings;
var taste_ratings;
var ref_food_from_params;
var health_first;
var health_second;
var run_taste;
var run_choice;
var rating_text_taste;
var rating_text_health;
var health_instruction2;
var taste_instruction2;
var HealthInstruction1_1Clock;
var health_inst1_1_text;
var health_inst1_1_resp;
var HealthInstruction2_1Clock;
var health_inst2_1_text;
var health_inst2_1_resp;
var HealthInstruction3_1Clock;
var health_inst3_1_text;
var health_inst3_1_resp;
var FixationHealth1Clock;
var trials_start_time_health1;
var health_fixationcross_1_text;
var FoodImageHealth1Clock;
var food_image_health_1;
var rating_health_1;
var key_resp_health1;
var WrongKeyHealth1Clock;
var wrongkeyhealth1;
var RemainderImageHealth1Clock;
var health_remainder_1;
var TooLateHealth1Clock;
var health_1_tooLate_text;
var EndOfBlock_health_1Clock;
var health_1_endblock_text;
var health_1_endblock_resp;
var TasteInstruction1Clock;
var taste_inst1_text;
var taste_inst1_resp;
var TasteInstruction2Clock;
var taste_inst2_text;
var taste_inst2_resp;
var TasteInstruction3Clock;
var taste_inst3_text;
var taste_inst3_resp;
var FixationTasteClock;
var trials_start_time_taste;
var taste_fixationcross_text;
var FoodImageTasteClock;
var food_image_taste;
var rating_taste;
var key_resp_taste;
var WrongKeyTasteClock;
var wrongkeytaste;
var RemainderImageTasteClock;
var taste_remainder;
var TooLateTasteClock;
var taste_tooLate_text;
var EndOfBlock_tasteClock;
var taste_endblock_text;
var taste_endblock_resp;
var HealthInstruction1_2Clock;
var health_inst1_2_text;
var health_inst1_2_resp;
var HealthInstruction2_2Clock;
var health_inst2_2_text;
var health_inst2_2_resp;
var HealthInstruction3_2Clock;
var health_inst3_2_text;
var health_inst3_2_resp;
var FixationHealth2Clock;
var trials_start_time_health2;
var health_fixationcross_2_text;
var FoodImageHealth2Clock;
var food_image_health2;
var rating_health2;
var key_resp_health2;
var WrongKeyHealth2Clock;
var wrongkeyhealth2;
var RemainderImageHealth2Clock;
var health_2_remainder;
var TooLateHealth2Clock;
var health_2_tooLate_text;
var EndOfBlock_health_2Clock;
var health_2_endblock_text;
var health_2_endblock_resp;
var GetReferenceFoodClock;
var food_items;
var ref_food;
var found_ref_food;
var ChoiceInstruction1Clock;
var ref_image_instruction1;
var ref_text_instruction1;
var ref_resp;
var ChoiceInstruction2Clock;
var choice_instruction2_text;
var c_rating;
var blueberry;
var raspberry;
var choice_instruction2_resp;
var ChoiceInstruction3Clock;
var choice_instruction3_resp;
var choice_instruction3_text;
var FixationChoiceClock;
var trials_start_time_choice;
var choice_fixationcross_text;
var FoodImageChoiceClock;
var food_image_choice;
var rating_choice;
var key_resp_choice;
var food_image_display;
var reference_food_image;
var WrongKeyChoiceClock;
var wrongkeychoice;
var RemainderImageChoiceClock;
var food_image_choice_remainder;
var reference_food_image_remainder;
var TooLateChoiceClock;
var choice_tooLate_text;
var EndOfBlock_ChoiceClock;
var choice_endblock_text;
var choice_endblock_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome_text"
  Welcome_textClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'Welcome!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from welcome_code
  health_ratings = {};
  taste_ratings = {};
  ref_food_from_params = "";
  if ((expInfo["order"] === "TH")) {
      health_first = 0;
      health_second = 1;
  } else {
      health_first = 1;
      health_second = 0;
  }
  if (((expInfo["run_h"] === 0) || (expInfo["run_h"] === "0"))) {
      health_first = 0;
      health_second = 0;
  }
  if (((expInfo["run_t"] === 0) || (expInfo["run_t"] === "0"))) {
      run_taste = 0;
  } else {
      run_taste = 1;
  }
  if (((expInfo["run_c"] === 0) || (expInfo["run_c"] === "0"))) {
      run_choice = 0;
  } else {
      run_choice = 1;
      ref_food_from_params = expInfo["ref_food_item"];
  }
  if (((expInfo["condition"] === 1) || (expInfo["condition"] === "1"))) {
      rating_text_taste = "(1) ------ (2) ------ (3) ------ (4) ------ (5)\nBad ----------- Neutral ----------- Good";
      rating_text_health = "(1) ------ (2) ------ (3) ------ (4) ------ (5)\nUnhealthy ----------- Neutral ----------- Healthy";
      health_instruction2 = "You can rate each picture as \"Neutral\"\nor on a scale from \"Unhealthy\" to \"Healthy\".\n\n(1) ------ (2) ------ (3) ------ (4) ------ (5)\nUnhealthy ----------- Neutral ----------- Healthy\nPress 'space' to continue.";
      taste_instruction2 = "You can rate each picture as \"Neutral\"\nor on a scale from \"Bad\" to \"Good\".\n\n(1) ----- (2) ----- (3) ----- (4) ----- (5)\nBad ----------- Neutral ----------- Good\n\nIf you have not eaten that food in a long time\nor never eaten it,\nplease try to remember the last time you ate it\nor think of a comparable food and rate it \nas best you can for how tasty you think it is.\n\nYou can press 'space' to continue.";
  } else {
      rating_text_taste = "(1) ------ (2) ------ (3) ------ (4) ------ (5)\nGood ----------- Neutral ----------- Bad";
      rating_text_health = "(1) ------ (2) ------ (3) ------ (4) ------ (5)\nHealthy ----------- Neutral ----------- Unhealthy";
      health_instruction2 = "You can rate each picture as \"Neutral\"\nor on a scale from \"Healthy\" to \"Unhealthy\".\n\n(1) ------ (2) ------ (3) ------ (4) ------ (5)\nHealthy ----------- Neutral ----------- Unhealthy\nPress 'space' to continue.";
      taste_instruction2 = "You can rate each picture as \"Neutral\"\nor on a scale from \"Good\" to \"Bad\".\n\n(1) ----- (2) ----- (3) ----- (4) ----- (5)\nGood ----------- Neutral ----------- Bad\n\nIf you have not eaten that food in a long time\nor never eaten it,\nplease try to remember the last time you ate it\nor think of a comparable food and rate it \nas best you can for how tasty you think it is.\n\nYou can press 'space' to continue.";
  }
  psychoJS.experiment.addData("rating_text_health", rating_text_health);
  psychoJS.experiment.addData("rating_text_taste", rating_text_taste);
  
  // Initialize components for Routine "HealthInstruction1_1"
  HealthInstruction1_1Clock = new util.Clock();
  health_inst1_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_inst1_1_text',
    text: 'You will see a series of pictures of food. \nFor each picture, please rate how HEALTHY you think it is.\n\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_inst1_1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "HealthInstruction2_1"
  HealthInstruction2_1Clock = new util.Clock();
  health_inst2_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_inst2_1_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_inst2_1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "HealthInstruction3_1"
  HealthInstruction3_1Clock = new util.Clock();
  health_inst3_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_inst3_1_text',
    text: 'There are no right or wrong answers. \nPlease rate only according to \nhow healthy or unhealthy you think that food is.\nIt is important that you give an answer on each trial.\n\nGet ready! You can press ‘space’ to start the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_inst3_1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FixationHealth1"
  FixationHealth1Clock = new util.Clock();
  // Run 'Begin Experiment' code from health_fix_1_code
  trials_start_time_health1 = 0;
  
  health_fixationcross_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_fixationcross_1_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "FoodImageHealth1"
  FoodImageHealth1Clock = new util.Clock();
  food_image_health_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'food_image_health_1', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  rating_health_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_health_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_health1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WrongKeyHealth1"
  WrongKeyHealth1Clock = new util.Clock();
  wrongkeyhealth1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrongkeyhealth1',
    text: 'WRONG KEY',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "RemainderImageHealth1"
  RemainderImageHealth1Clock = new util.Clock();
  health_remainder_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'health_remainder_1', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "TooLateHealth1"
  TooLateHealth1Clock = new util.Clock();
  health_1_tooLate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_1_tooLate_text',
    text: 'Too late!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "EndOfBlock_health_1"
  EndOfBlock_health_1Clock = new util.Clock();
  health_1_endblock_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_1_endblock_text',
    text: 'End of Block\n\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_1_endblock_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TasteInstruction1"
  TasteInstruction1Clock = new util.Clock();
  taste_inst1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taste_inst1_text',
    text: 'You will see a series of pictures of food. \nFor each picture, please rate how TASTY you think it is.\n\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  taste_inst1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TasteInstruction2"
  TasteInstruction2Clock = new util.Clock();
  taste_inst2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taste_inst2_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  taste_inst2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TasteInstruction3"
  TasteInstruction3Clock = new util.Clock();
  taste_inst3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taste_inst3_text',
    text: 'There are no right or wrong answers. \nPlease rate only according to \nhow good or bad you think that food tastes.\nIt is important that you give an answer on each trial.\n\nGet ready! You can press ‘space’ to start the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  taste_inst3_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FixationTaste"
  FixationTasteClock = new util.Clock();
  // Run 'Begin Experiment' code from taste_fix_code
  trials_start_time_taste = 0;
  
  taste_fixationcross_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taste_fixationcross_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "FoodImageTaste"
  FoodImageTasteClock = new util.Clock();
  food_image_taste = new visual.ImageStim({
    win : psychoJS.window,
    name : 'food_image_taste', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  rating_taste = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_taste',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_taste = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WrongKeyTaste"
  WrongKeyTasteClock = new util.Clock();
  wrongkeytaste = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrongkeytaste',
    text: 'WRONG KEY',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "RemainderImageTaste"
  RemainderImageTasteClock = new util.Clock();
  taste_remainder = new visual.ImageStim({
    win : psychoJS.window,
    name : 'taste_remainder', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "TooLateTaste"
  TooLateTasteClock = new util.Clock();
  taste_tooLate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taste_tooLate_text',
    text: 'Too late!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "EndOfBlock_taste"
  EndOfBlock_tasteClock = new util.Clock();
  taste_endblock_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taste_endblock_text',
    text: 'End of Block\n\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  taste_endblock_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "HealthInstruction1_2"
  HealthInstruction1_2Clock = new util.Clock();
  health_inst1_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_inst1_2_text',
    text: 'You will see a series of pictures of food. \nFor each picture, please rate how HEALTHY you think it is.\n\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_inst1_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "HealthInstruction2_2"
  HealthInstruction2_2Clock = new util.Clock();
  health_inst2_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_inst2_2_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_inst2_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "HealthInstruction3_2"
  HealthInstruction3_2Clock = new util.Clock();
  health_inst3_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_inst3_2_text',
    text: 'There are no right or wrong answers. \nPlease rate only according to \nhow healthy or unhealthy you think that food is.\nIt is important that you give an answer on each trial.\n\nGet ready! You can press ‘space’ to start the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_inst3_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FixationHealth2"
  FixationHealth2Clock = new util.Clock();
  // Run 'Begin Experiment' code from health_fix_2_code
  trials_start_time_health2 = 0;
  
  health_fixationcross_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_fixationcross_2_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "FoodImageHealth2"
  FoodImageHealth2Clock = new util.Clock();
  food_image_health2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'food_image_health2', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  rating_health2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_health2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_health2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WrongKeyHealth2"
  WrongKeyHealth2Clock = new util.Clock();
  wrongkeyhealth2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrongkeyhealth2',
    text: 'WRONG KEY',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "RemainderImageHealth2"
  RemainderImageHealth2Clock = new util.Clock();
  health_2_remainder = new visual.ImageStim({
    win : psychoJS.window,
    name : 'health_2_remainder', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "TooLateHealth2"
  TooLateHealth2Clock = new util.Clock();
  health_2_tooLate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_2_tooLate_text',
    text: 'Too late!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "EndOfBlock_health_2"
  EndOfBlock_health_2Clock = new util.Clock();
  health_2_endblock_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'health_2_endblock_text',
    text: 'End of Block\n\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  health_2_endblock_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GetReferenceFood"
  GetReferenceFoodClock = new util.Clock();
  // Run 'Begin Experiment' code from get_ref_food_code
  food_items = ["1permilk", "air popcorn", "american cheese", "apple slices", "avocado", "baby cheese", "bagel and cc", "bagel plain", "baguette oil", "baked potato", "banana", "broccoli cauliflower", "brownie", "burger", "celery and carrot sticks", "Cheese nachos", "cherries", "cherry tomato", "chicken nuggets2", "cookies", "corn cob", "cucumber slices", "cupcakes am", "doughnuts", "eggs", "french fries", "fried eggs", "froot loops w milk", "granola w milk", "Grapes", "green beans", "grilled cheese", "grilled chicken strips", "Hershey Kisses", "hotdog w must", "ice cream sundae 002", "kiwi", "lollipops", "m_and_m", "mac & cheese", "mashed potato", "mini muffins", "mozzarella sticks", "mushrooms", "orange slices", "PB", "peaches", "pickles", "pizza", "Pretzels", "raisin bran w milk", "raisins", "reeses", "rice cakes", "rigatoni", "rigatoni and sauce", "ritz", "salad w chicken", "saltines", "seaweed", "Skim milk", "soup with spoon", "sour patch", "soy chips", "steak", "strawberries", "string cheese", "sushi w_condiments", "tacos", "trail mix", "Tribe hummus pita", "turkey sandwich", "Whole milk", "yellow popcorn", "yogurt no spoon", "yogurt pretzels"];
  ref_food = "saltines";
  found_ref_food = 0;
  if ((ref_food_from_params !== "")) {
      ref_food = ref_food_from_params;
      found_ref_food = 1;
  }
  
  // Initialize components for Routine "ChoiceInstruction1"
  ChoiceInstruction1Clock = new util.Clock();
  ref_image_instruction1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ref_image_instruction1', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.25)], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  ref_text_instruction1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ref_text_instruction1',
    text: 'Now you will be asked to choose a food to eat. \nOn each trial, you will see \nthis reference food on the left - it is always the same.\nOn the right the choice will change on each trial.\nPress ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  ref_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ChoiceInstruction2"
  ChoiceInstruction2Clock = new util.Clock();
  choice_instruction2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_instruction2_text',
    text: 'For each picture, indicate whether you “Prefer” or \n“Strongly prefer” the food on the right or instead “Prefer” or \n“Strongly prefer” the reference food on the left. If you \nreally cannot choose between the two pictures, you may \nindicate “Neutral”. Press ‘space’ to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  c_rating = new visual.TextStim({
    win: psychoJS.window,
    name: 'c_rating',
    text: '(1) ------- (2) ------- (3) ------- (4) ------- (5)\nStrongly prefer -- Prefer -- Neutral -- Prefer -- Strongly prefer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blueberry = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blueberry', units : 'norm', 
    image : 'stimuli/AA026339.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.35), (- 0.15)], 
    draggable: false,
    size : [0.45, 0.6],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -2.0 
  });
  raspberry = new visual.ImageStim({
    win : psychoJS.window,
    name : 'raspberry', units : 'norm', 
    image : 'stimuli/AA026337.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.35, (- 0.15)], 
    draggable: false,
    size : [0.45, 0.6],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -3.0 
  });
  choice_instruction2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ChoiceInstruction3"
  ChoiceInstruction3Clock = new util.Clock();
  choice_instruction3_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  choice_instruction3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_instruction3_text',
    text: 'Please be sure your choices accurately\nreflect your preferences. Imagine that you will be asked to eat\na snack sized portion of one of your preferred items,\nrandomly selected at the end of the task.\n\nGet ready! You can press ‘space’ to start the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "FixationChoice"
  FixationChoiceClock = new util.Clock();
  // Run 'Begin Experiment' code from choice_fix_code
  trials_start_time_choice = 0;
  
  choice_fixationcross_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_fixationcross_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "FoodImageChoice"
  FoodImageChoiceClock = new util.Clock();
  food_image_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'food_image_choice', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.35, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  rating_choice = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_choice',
    text: '(1) ------- (2) ------- (3) ------- (4) ------- (5)\nStrongly prefer -- Prefer -- Neutral -- Prefer -- Strongly prefer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_choice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from choice_image_code
  food_image_display = "";
  
  reference_food_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reference_food_image', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.35), 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "WrongKeyChoice"
  WrongKeyChoiceClock = new util.Clock();
  wrongkeychoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrongkeychoice',
    text: 'WRONG KEY',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "RemainderImageChoice"
  RemainderImageChoiceClock = new util.Clock();
  food_image_choice_remainder = new visual.ImageStim({
    win : psychoJS.window,
    name : 'food_image_choice_remainder', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.35, 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  reference_food_image_remainder = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reference_food_image_remainder', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.35), 0.2], 
    draggable: false,
    size : [0.5, 0.65],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "TooLateChoice"
  TooLateChoiceClock = new util.Clock();
  choice_tooLate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_tooLate_text',
    text: 'Too late!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "EndOfBlock_Choice"
  EndOfBlock_ChoiceClock = new util.Clock();
  choice_endblock_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_endblock_text',
    text: 'End of Block!\n\nThank you for your participation :)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  choice_endblock_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Welcome_textMaxDurationReached;
var _welcome_response_allKeys;
var Welcome_textMaxDuration;
var Welcome_textComponents;
function Welcome_textRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome_text' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Welcome_textClock.reset();
    routineTimer.reset();
    Welcome_textMaxDurationReached = false;
    // update component parameters for each repeat
    welcome_response.keys = undefined;
    welcome_response.rt = undefined;
    _welcome_response_allKeys = [];
    psychoJS.experiment.addData('Welcome_text.started', globalClock.getTime());
    Welcome_textMaxDuration = null
    // keep track of which components have finished
    Welcome_textComponents = [];
    Welcome_textComponents.push(welcome);
    Welcome_textComponents.push(welcome_response);
    
    Welcome_textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Welcome_textRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome_text' ---
    // get current time
    t = Welcome_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }
    
    
    // if welcome is active this frame...
    if (welcome.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *welcome_response* updates
    if (t >= 0.0 && welcome_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_response.tStart = t;  // (not accounting for frame time here)
      welcome_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_response.clearEvents(); });
    }
    
    // if welcome_response is active this frame...
    if (welcome_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_response.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _welcome_response_allKeys = _welcome_response_allKeys.concat(theseKeys);
      if (_welcome_response_allKeys.length > 0) {
        welcome_response.keys = _welcome_response_allKeys[_welcome_response_allKeys.length - 1].name;  // just the last key pressed
        welcome_response.rt = _welcome_response_allKeys[_welcome_response_allKeys.length - 1].rt;
        welcome_response.duration = _welcome_response_allKeys[_welcome_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Welcome_textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcome_textRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome_text' ---
    Welcome_textComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Welcome_text.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcome_response.corr, level);
    }
    psychoJS.experiment.addData('welcome_response.keys', welcome_response.keys);
    if (typeof welcome_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome_response.rt', welcome_response.rt);
        psychoJS.experiment.addData('welcome_response.duration', welcome_response.duration);
        routineTimer.reset();
        }
    
    welcome_response.stop();
    // the Routine "Welcome_text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var HealthInstruction1_1MaxDurationReached;
var _health_inst1_1_resp_allKeys;
var HealthInstruction1_1MaxDuration;
var HealthInstruction1_1Components;
function HealthInstruction1_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'HealthInstruction1_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    HealthInstruction1_1Clock.reset();
    routineTimer.reset();
    HealthInstruction1_1MaxDurationReached = false;
    // update component parameters for each repeat
    health_inst1_1_resp.keys = undefined;
    health_inst1_1_resp.rt = undefined;
    _health_inst1_1_resp_allKeys = [];
    // Run 'Begin Routine' code from health_inst1_1_code
    if ((health_first === 0)) {
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('HealthInstruction1_1.started', globalClock.getTime());
    HealthInstruction1_1MaxDuration = null
    // keep track of which components have finished
    HealthInstruction1_1Components = [];
    HealthInstruction1_1Components.push(health_inst1_1_text);
    HealthInstruction1_1Components.push(health_inst1_1_resp);
    
    HealthInstruction1_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function HealthInstruction1_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'HealthInstruction1_1' ---
    // get current time
    t = HealthInstruction1_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *health_inst1_1_text* updates
    if (t >= 0.0 && health_inst1_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      health_inst1_1_text.tStart = t;  // (not accounting for frame time here)
      health_inst1_1_text.frameNStart = frameN;  // exact frame index
      
      health_inst1_1_text.setAutoDraw(true);
    }
    
    
    // if health_inst1_1_text is active this frame...
    if (health_inst1_1_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *health_inst1_1_resp* updates
    if (t >= 0.0 && health_inst1_1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      health_inst1_1_resp.tStart = t;  // (not accounting for frame time here)
      health_inst1_1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { health_inst1_1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { health_inst1_1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { health_inst1_1_resp.clearEvents(); });
    }
    
    // if health_inst1_1_resp is active this frame...
    if (health_inst1_1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = health_inst1_1_resp.getKeys({
        keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
        waitRelease: false
      });
      _health_inst1_1_resp_allKeys = _health_inst1_1_resp_allKeys.concat(theseKeys);
      if (_health_inst1_1_resp_allKeys.length > 0) {
        health_inst1_1_resp.keys = _health_inst1_1_resp_allKeys[_health_inst1_1_resp_allKeys.length - 1].name;  // just the last key pressed
        health_inst1_1_resp.rt = _health_inst1_1_resp_allKeys[_health_inst1_1_resp_allKeys.length - 1].rt;
        health_inst1_1_resp.duration = _health_inst1_1_resp_allKeys[_health_inst1_1_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    HealthInstruction1_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HealthInstruction1_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HealthInstruction1_1' ---
    HealthInstruction1_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('HealthInstruction1_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(health_inst1_1_resp.corr, level);
    }
    psychoJS.experiment.addData('health_inst1_1_resp.keys', health_inst1_1_resp.keys);
    if (typeof health_inst1_1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('health_inst1_1_resp.rt', health_inst1_1_resp.rt);
        psychoJS.experiment.addData('health_inst1_1_resp.duration', health_inst1_1_resp.duration);
        routineTimer.reset();
        }
    
    health_inst1_1_resp.stop();
    // the Routine "HealthInstruction1_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var HealthInstruction2_1MaxDurationReached;
var _health_inst2_1_resp_allKeys;
var HealthInstruction2_1MaxDuration;
var HealthInstruction2_1Components;
function HealthInstruction2_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'HealthInstruction2_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    HealthInstruction2_1Clock.reset();
    routineTimer.reset();
    HealthInstruction2_1MaxDurationReached = false;
    // update component parameters for each repeat
    health_inst2_1_text.setText(health_instruction2);
    health_inst2_1_resp.keys = undefined;
    health_inst2_1_resp.rt = undefined;
    _health_inst2_1_resp_allKeys = [];
    // Run 'Begin Routine' code from health_inst2_1_code
    if ((health_first === 0)) {
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('HealthInstruction2_1.started', globalClock.getTime());
    HealthInstruction2_1MaxDuration = null
    // keep track of which components have finished
    HealthInstruction2_1Components = [];
    HealthInstruction2_1Components.push(health_inst2_1_text);
    HealthInstruction2_1Components.push(health_inst2_1_resp);
    
    HealthInstruction2_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function HealthInstruction2_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'HealthInstruction2_1' ---
    // get current time
    t = HealthInstruction2_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *health_inst2_1_text* updates
    if (t >= 0.0 && health_inst2_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      health_inst2_1_text.tStart = t;  // (not accounting for frame time here)
      health_inst2_1_text.frameNStart = frameN;  // exact frame index
      
      health_inst2_1_text.setAutoDraw(true);
    }
    
    
    // if health_inst2_1_text is active this frame...
    if (health_inst2_1_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *health_inst2_1_resp* updates
    if (t >= 0.0 && health_inst2_1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      health_inst2_1_resp.tStart = t;  // (not accounting for frame time here)
      health_inst2_1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { health_inst2_1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { health_inst2_1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { health_inst2_1_resp.clearEvents(); });
    }
    
    // if health_inst2_1_resp is active this frame...
    if (health_inst2_1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = health_inst2_1_resp.getKeys({
        keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
        waitRelease: false
      });
      _health_inst2_1_resp_allKeys = _health_inst2_1_resp_allKeys.concat(theseKeys);
      if (_health_inst2_1_resp_allKeys.length > 0) {
        health_inst2_1_resp.keys = _health_inst2_1_resp_allKeys[_health_inst2_1_resp_allKeys.length - 1].name;  // just the last key pressed
        health_inst2_1_resp.rt = _health_inst2_1_resp_allKeys[_health_inst2_1_resp_allKeys.length - 1].rt;
        health_inst2_1_resp.duration = _health_inst2_1_resp_allKeys[_health_inst2_1_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    HealthInstruction2_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HealthInstruction2_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HealthInstruction2_1' ---
    HealthInstruction2_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('HealthInstruction2_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(health_inst2_1_resp.corr, level);
    }
    psychoJS.experiment.addData('health_inst2_1_resp.keys', health_inst2_1_resp.keys);
    if (typeof health_inst2_1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('health_inst2_1_resp.rt', health_inst2_1_resp.rt);
        psychoJS.experiment.addData('health_inst2_1_resp.duration', health_inst2_1_resp.duration);
        routineTimer.reset();
        }
    
    health_inst2_1_resp.stop();
    // the Routine "HealthInstruction2_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var HealthInstruction3_1MaxDurationReached;
var _health_inst3_1_resp_allKeys;
var HealthInstruction3_1MaxDuration;
var HealthInstruction3_1Components;
function HealthInstruction3_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'HealthInstruction3_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    HealthInstruction3_1Clock.reset();
    routineTimer.reset();
    HealthInstruction3_1MaxDurationReached = false;
    // update component parameters for each repeat
    health_inst3_1_resp.keys = undefined;
    health_inst3_1_resp.rt = undefined;
    _health_inst3_1_resp_allKeys = [];
    // Run 'Begin Routine' code from health_inst3_1_code
    if ((health_first === 0)) {
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('HealthInstruction3_1.started', globalClock.getTime());
    HealthInstruction3_1MaxDuration = null
    // keep track of which components have finished
    HealthInstruction3_1Components = [];
    HealthInstruction3_1Components.push(health_inst3_1_text);
    HealthInstruction3_1Components.push(health_inst3_1_resp);
    
    HealthInstruction3_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function HealthInstruction3_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'HealthInstruction3_1' ---
    // get current time
    t = HealthInstruction3_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *health_inst3_1_text* updates
    if (t >= 0.0 && health_inst3_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      health_inst3_1_text.tStart = t;  // (not accounting for frame time here)
      health_inst3_1_text.frameNStart = frameN;  // exact frame index
      
      health_inst3_1_text.setAutoDraw(true);
    }
    
    
    // if health_inst3_1_text is active this frame...
    if (health_inst3_1_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *health_inst3_1_resp* updates
    if (t >= 0.0 && health_inst3_1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      health_inst3_1_resp.tStart = t;  // (not accounting for frame time here)
      health_inst3_1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { health_inst3_1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { health_inst3_1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { health_inst3_1_resp.clearEvents(); });
    }
    
    // if health_inst3_1_resp is active this frame...
    if (health_inst3_1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = health_inst3_1_resp.getKeys({
        keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
        waitRelease: false
      });
      _health_inst3_1_resp_allKeys = _health_inst3_1_resp_allKeys.concat(theseKeys);
      if (_health_inst3_1_resp_allKeys.length > 0) {
        health_inst3_1_resp.keys = _health_inst3_1_resp_allKeys[_health_inst3_1_resp_allKeys.length - 1].name;  // just the last key pressed
        health_inst3_1_resp.rt = _health_inst3_1_resp_allKeys[_health_inst3_1_resp_allKeys.length - 1].rt;
        health_inst3_1_resp.duration = _health_inst3_1_resp_allKeys[_health_inst3_1_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    HealthInstruction3_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HealthInstruction3_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HealthInstruction3_1' ---
    HealthInstruction3_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('HealthInstruction3_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(health_inst3_1_resp.corr, level);
    }
    psychoJS.experiment.addData('health_inst3_1_resp.keys', health_inst3_1_resp.keys);
    if (typeof health_inst3_1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('health_inst3_1_resp.rt', health_inst3_1_resp.rt);
        psychoJS.experiment.addData('health_inst3_1_resp.duration', health_inst3_1_resp.duration);
        routineTimer.reset();
        }
    
    health_inst3_1_resp.stop();
    // the Routine "HealthInstruction3_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_health1;
function trials_health1LoopBegin(trials_health1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_health1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: health_first, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("lists/foodlist" + expInfo["h_list"]) + ".csv"),
      seed: undefined, name: 'trials_health1'
    });
    psychoJS.experiment.addLoop(trials_health1); // add the loop to the experiment
    currentLoop = trials_health1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_health1.forEach(function() {
      snapshot = trials_health1.getSnapshot();
    
      trials_health1LoopScheduler.add(importConditions(snapshot));
      trials_health1LoopScheduler.add(FixationHealth1RoutineBegin(snapshot));
      trials_health1LoopScheduler.add(FixationHealth1RoutineEachFrame());
      trials_health1LoopScheduler.add(FixationHealth1RoutineEnd(snapshot));
      trials_health1LoopScheduler.add(FoodImageHealth1RoutineBegin(snapshot));
      trials_health1LoopScheduler.add(FoodImageHealth1RoutineEachFrame());
      trials_health1LoopScheduler.add(FoodImageHealth1RoutineEnd(snapshot));
      trials_health1LoopScheduler.add(WrongKeyHealth1RoutineBegin(snapshot));
      trials_health1LoopScheduler.add(WrongKeyHealth1RoutineEachFrame());
      trials_health1LoopScheduler.add(WrongKeyHealth1RoutineEnd(snapshot));
      trials_health1LoopScheduler.add(RemainderImageHealth1RoutineBegin(snapshot));
      trials_health1LoopScheduler.add(RemainderImageHealth1RoutineEachFrame());
      trials_health1LoopScheduler.add(RemainderImageHealth1RoutineEnd(snapshot));
      trials_health1LoopScheduler.add(TooLateHealth1RoutineBegin(snapshot));
      trials_health1LoopScheduler.add(TooLateHealth1RoutineEachFrame());
      trials_health1LoopScheduler.add(TooLateHealth1RoutineEnd(snapshot));
      trials_health1LoopScheduler.add(trials_health1LoopEndIteration(trials_health1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_health1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_health1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_health1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_taste;
function trials_tasteLoopBegin(trials_tasteLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_taste = new TrialHandler({
      psychoJS: psychoJS,
      nReps: run_taste, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("lists/foodlist" + expInfo["t_list"]) + ".csv"),
      seed: undefined, name: 'trials_taste'
    });
    psychoJS.experiment.addLoop(trials_taste); // add the loop to the experiment
    currentLoop = trials_taste;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_taste.forEach(function() {
      snapshot = trials_taste.getSnapshot();
    
      trials_tasteLoopScheduler.add(importConditions(snapshot));
      trials_tasteLoopScheduler.add(FixationTasteRoutineBegin(snapshot));
      trials_tasteLoopScheduler.add(FixationTasteRoutineEachFrame());
      trials_tasteLoopScheduler.add(FixationTasteRoutineEnd(snapshot));
      trials_tasteLoopScheduler.add(FoodImageTasteRoutineBegin(snapshot));
      trials_tasteLoopScheduler.add(FoodImageTasteRoutineEachFrame());
      trials_tasteLoopScheduler.add(FoodImageTasteRoutineEnd(snapshot));
      trials_tasteLoopScheduler.add(WrongKeyTasteRoutineBegin(snapshot));
      trials_tasteLoopScheduler.add(WrongKeyTasteRoutineEachFrame());
      trials_tasteLoopScheduler.add(WrongKeyTasteRoutineEnd(snapshot));
      trials_tasteLoopScheduler.add(RemainderImageTasteRoutineBegin(snapshot));
      trials_tasteLoopScheduler.add(RemainderImageTasteRoutineEachFrame());
      trials_tasteLoopScheduler.add(RemainderImageTasteRoutineEnd(snapshot));
      trials_tasteLoopScheduler.add(TooLateTasteRoutineBegin(snapshot));
      trials_tasteLoopScheduler.add(TooLateTasteRoutineEachFrame());
      trials_tasteLoopScheduler.add(TooLateTasteRoutineEnd(snapshot));
      trials_tasteLoopScheduler.add(trials_tasteLoopEndIteration(trials_tasteLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_tasteLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_taste);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_tasteLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_health2;
function trials_health2LoopBegin(trials_health2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_health2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: health_second, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("lists/foodlist" + expInfo["h_list"]) + ".csv"),
      seed: undefined, name: 'trials_health2'
    });
    psychoJS.experiment.addLoop(trials_health2); // add the loop to the experiment
    currentLoop = trials_health2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_health2.forEach(function() {
      snapshot = trials_health2.getSnapshot();
    
      trials_health2LoopScheduler.add(importConditions(snapshot));
      trials_health2LoopScheduler.add(FixationHealth2RoutineBegin(snapshot));
      trials_health2LoopScheduler.add(FixationHealth2RoutineEachFrame());
      trials_health2LoopScheduler.add(FixationHealth2RoutineEnd(snapshot));
      trials_health2LoopScheduler.add(FoodImageHealth2RoutineBegin(snapshot));
      trials_health2LoopScheduler.add(FoodImageHealth2RoutineEachFrame());
      trials_health2LoopScheduler.add(FoodImageHealth2RoutineEnd(snapshot));
      trials_health2LoopScheduler.add(WrongKeyHealth2RoutineBegin(snapshot));
      trials_health2LoopScheduler.add(WrongKeyHealth2RoutineEachFrame());
      trials_health2LoopScheduler.add(WrongKeyHealth2RoutineEnd(snapshot));
      trials_health2LoopScheduler.add(RemainderImageHealth2RoutineBegin(snapshot));
      trials_health2LoopScheduler.add(RemainderImageHealth2RoutineEachFrame());
      trials_health2LoopScheduler.add(RemainderImageHealth2RoutineEnd(snapshot));
      trials_health2LoopScheduler.add(TooLateHealth2RoutineBegin(snapshot));
      trials_health2LoopScheduler.add(TooLateHealth2RoutineEachFrame());
      trials_health2LoopScheduler.add(TooLateHealth2RoutineEnd(snapshot));
      trials_health2LoopScheduler.add(trials_health2LoopEndIteration(trials_health2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_health2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_health2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_health2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_choice;
function trials_choiceLoopBegin(trials_choiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_choice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: run_choice, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("lists/foodlist" + expInfo["c_list"]) + ".csv"),
      seed: undefined, name: 'trials_choice'
    });
    psychoJS.experiment.addLoop(trials_choice); // add the loop to the experiment
    currentLoop = trials_choice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_choice.forEach(function() {
      snapshot = trials_choice.getSnapshot();
    
      trials_choiceLoopScheduler.add(importConditions(snapshot));
      trials_choiceLoopScheduler.add(FixationChoiceRoutineBegin(snapshot));
      trials_choiceLoopScheduler.add(FixationChoiceRoutineEachFrame());
      trials_choiceLoopScheduler.add(FixationChoiceRoutineEnd(snapshot));
      trials_choiceLoopScheduler.add(FoodImageChoiceRoutineBegin(snapshot));
      trials_choiceLoopScheduler.add(FoodImageChoiceRoutineEachFrame());
      trials_choiceLoopScheduler.add(FoodImageChoiceRoutineEnd(snapshot));
      trials_choiceLoopScheduler.add(WrongKeyChoiceRoutineBegin(snapshot));
      trials_choiceLoopScheduler.add(WrongKeyChoiceRoutineEachFrame());
      trials_choiceLoopScheduler.add(WrongKeyChoiceRoutineEnd(snapshot));
      trials_choiceLoopScheduler.add(RemainderImageChoiceRoutineBegin(snapshot));
      trials_choiceLoopScheduler.add(RemainderImageChoiceRoutineEachFrame());
      trials_choiceLoopScheduler.add(RemainderImageChoiceRoutineEnd(snapshot));
      trials_choiceLoopScheduler.add(TooLateChoiceRoutineBegin(snapshot));
      trials_choiceLoopScheduler.add(TooLateChoiceRoutineEachFrame());
      trials_choiceLoopScheduler.add(TooLateChoiceRoutineEnd(snapshot));
      trials_choiceLoopScheduler.add(trials_choiceLoopEndIteration(trials_choiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_choiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_choice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_choiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var FixationHealth1MaxDurationReached;
var fixation_duration;
var FixationHealth1MaxDuration;
var FixationHealth1Components;
function FixationHealth1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FixationHealth1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FixationHealth1Clock.reset();
    routineTimer.reset();
    FixationHealth1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from health_fix_1_code
    if ((trials_health1.thisN === 0)) {
        trials_start_time_health1 = globalClock.getTime();
    }
    fixation_duration = ((trialstart + trials_start_time_health1) - globalClock.getTime());
    psychoJS.experiment.addData("fixation_duration", fixation_duration);
    
    health_fixationcross_1_text.setText('+');
    psychoJS.experiment.addData('FixationHealth1.started', globalClock.getTime());
    FixationHealth1MaxDuration = null
    // keep track of which components have finished
    FixationHealth1Components = [];
    FixationHealth1Components.push(health_fixationcross_1_text);
    
    FixationHealth1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixationHealth1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FixationHealth1' ---
    // get current time
    t = FixationHealth1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *health_fixationcross_1_text* updates
    if (t >= 0.0 && health_fixationcross_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      health_fixationcross_1_text.tStart = t;  // (not accounting for frame time here)
      health_fixationcross_1_text.frameNStart = frameN;  // exact frame index
      
      health_fixationcross_1_text.setAutoDraw(true);
    }
    
    
    // if health_fixationcross_1_text is active this frame...
    if (health_fixationcross_1_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + fixation_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (health_fixationcross_1_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      health_fixationcross_1_text.tStop = t;  // not accounting for scr refresh
      health_fixationcross_1_text.frameNStop = frameN;  // exact frame index
      // update status
      health_fixationcross_1_text.status = PsychoJS.Status.FINISHED;
      health_fixationcross_1_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationHealth1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationHealth1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FixationHealth1' ---
    FixationHealth1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('FixationHealth1.stopped', globalClock.getTime());
    // the Routine "FixationHealth1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FoodImageHealth1MaxDurationReached;
var _key_resp_health1_allKeys;
var image_started_time;
var FoodImageHealth1MaxDuration;
var FoodImageHealth1Components;
function FoodImageHealth1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FoodImageHealth1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FoodImageHealth1Clock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    FoodImageHealth1MaxDurationReached = false;
    // update component parameters for each repeat
    food_image_health_1.setImage(food);
    rating_health_1.setText(rating_text_health);
    key_resp_health1.keys = undefined;
    key_resp_health1.rt = undefined;
    _key_resp_health1_allKeys = [];
    // Run 'Begin Routine' code from health_1_image_code
    image_started_time = globalClock.getTime();
    
    psychoJS.experiment.addData('FoodImageHealth1.started', globalClock.getTime());
    FoodImageHealth1MaxDuration = null
    // keep track of which components have finished
    FoodImageHealth1Components = [];
    FoodImageHealth1Components.push(food_image_health_1);
    FoodImageHealth1Components.push(rating_health_1);
    FoodImageHealth1Components.push(key_resp_health1);
    
    FoodImageHealth1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FoodImageHealth1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FoodImageHealth1' ---
    // get current time
    t = FoodImageHealth1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *food_image_health_1* updates
    if (t >= 0.0 && food_image_health_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      food_image_health_1.tStart = t;  // (not accounting for frame time here)
      food_image_health_1.frameNStart = frameN;  // exact frame index
      
      food_image_health_1.setAutoDraw(true);
    }
    
    
    // if food_image_health_1 is active this frame...
    if (food_image_health_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (food_image_health_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      food_image_health_1.tStop = t;  // not accounting for scr refresh
      food_image_health_1.frameNStop = frameN;  // exact frame index
      // update status
      food_image_health_1.status = PsychoJS.Status.FINISHED;
      food_image_health_1.setAutoDraw(false);
    }
    
    
    // *rating_health_1* updates
    if (t >= 0.0 && rating_health_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_health_1.tStart = t;  // (not accounting for frame time here)
      rating_health_1.frameNStart = frameN;  // exact frame index
      
      rating_health_1.setAutoDraw(true);
    }
    
    
    // if rating_health_1 is active this frame...
    if (rating_health_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (rating_health_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      rating_health_1.tStop = t;  // not accounting for scr refresh
      rating_health_1.frameNStop = frameN;  // exact frame index
      // update status
      rating_health_1.status = PsychoJS.Status.FINISHED;
      rating_health_1.setAutoDraw(false);
    }
    
    
    // *key_resp_health1* updates
    if (t >= 0.0 && key_resp_health1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_health1.tStart = t;  // (not accounting for frame time here)
      key_resp_health1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_health1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_health1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_health1.clearEvents(); });
    }
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_health1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_health1.tStop = t;  // not accounting for scr refresh
      key_resp_health1.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_health1.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_health1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_health1.tStop = t;  // not accounting for scr refresh
        key_resp_health1.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_health1.status = PsychoJS.Status.FINISHED;
        key_resp_health1.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_health1 is active this frame...
      if (key_resp_health1.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_health1.getKeys({
          keyList: typeof [] === 'string' ? [[]] : [], 
          waitRelease: false
        });
        _key_resp_health1_allKeys = _key_resp_health1_allKeys.concat(theseKeys);
        if (_key_resp_health1_allKeys.length > 0) {
          key_resp_health1.keys = _key_resp_health1_allKeys[_key_resp_health1_allKeys.length - 1].name;  // just the last key pressed
          key_resp_health1.rt = _key_resp_health1_allKeys[_key_resp_health1_allKeys.length - 1].rt;
          key_resp_health1.duration = _key_resp_health1_allKeys[_key_resp_health1_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      FoodImageHealth1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var image_ended_time;
var remainder;
var responded;
var wrongkey;
var food_item;
var rating_given;
var integer_rating;
function FoodImageHealth1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'FoodImageHealth1' ---
      FoodImageHealth1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('FoodImageHealth1.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_health1.corr, level);
      }
      psychoJS.experiment.addData('key_resp_health1.keys', key_resp_health1.keys);
      if (typeof key_resp_health1.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_health1.rt', key_resp_health1.rt);
          psychoJS.experiment.addData('key_resp_health1.duration', key_resp_health1.duration);
          routineTimer.reset();
          }
      
      key_resp_health1.stop();
      // Run 'End Routine' code from health_1_image_code
      image_ended_time = globalClock.getTime();
      remainder = ((4.0 - image_ended_time) + image_started_time);
      responded = 0;
      wrongkey = 0;
      food_item = trials_health1.thisTrial["food_item"];
      if (key_resp_health1.keys) {
          responded = 1;
          rating_given = key_resp_health1.keys.slice((- 1))[0].toString();
          if ((((((rating_given === "1") || (rating_given === "2")) || (rating_given === "3")) || (rating_given === "4")) || (rating_given === "5"))) {
              integer_rating = Number.parseInt(rating_given);
              if (((expInfo["condition"] === 1) || (expInfo["condition"] === "1"))) {
                  health_ratings[food_item] = integer_rating;
              } else {
                  health_ratings[food_item] = (6 - integer_rating);
              }
              psychoJS.experiment.addData("health_rating", health_ratings[food_item]);
          } else {
              wrongkey = 1;
              remainder = 0;
          }
      }
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (FoodImageHealth1MaxDurationReached) {
          FoodImageHealth1Clock.add(FoodImageHealth1MaxDuration);
      } else {
          FoodImageHealth1Clock.add(4.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var WrongKeyHealth1MaxDurationReached;
var WrongKeyHealth1MaxDuration;
var WrongKeyHealth1Components;
function WrongKeyHealth1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'WrongKeyHealth1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      WrongKeyHealth1Clock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      WrongKeyHealth1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from wk_health1_code
      if ((wrongkey === 0)) {
          continueRoutine = false;
      }
      
      psychoJS.experiment.addData('WrongKeyHealth1.started', globalClock.getTime());
      WrongKeyHealth1MaxDuration = null
      // keep track of which components have finished
      WrongKeyHealth1Components = [];
      WrongKeyHealth1Components.push(wrongkeyhealth1);
      
      WrongKeyHealth1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function WrongKeyHealth1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'WrongKeyHealth1' ---
      // get current time
      t = WrongKeyHealth1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *wrongkeyhealth1* updates
      if (t >= 0.0 && wrongkeyhealth1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        wrongkeyhealth1.tStart = t;  // (not accounting for frame time here)
        wrongkeyhealth1.frameNStart = frameN;  // exact frame index
        
        wrongkeyhealth1.setAutoDraw(true);
      }
      
      
      // if wrongkeyhealth1 is active this frame...
      if (wrongkeyhealth1.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (wrongkeyhealth1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        wrongkeyhealth1.tStop = t;  // not accounting for scr refresh
        wrongkeyhealth1.frameNStop = frameN;  // exact frame index
        // update status
        wrongkeyhealth1.status = PsychoJS.Status.FINISHED;
        wrongkeyhealth1.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      WrongKeyHealth1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function WrongKeyHealth1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'WrongKeyHealth1' ---
      WrongKeyHealth1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('WrongKeyHealth1.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (WrongKeyHealth1MaxDurationReached) {
          WrongKeyHealth1Clock.add(WrongKeyHealth1MaxDuration);
      } else {
          WrongKeyHealth1Clock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var RemainderImageHealth1MaxDurationReached;
var RemainderImageHealth1MaxDuration;
var RemainderImageHealth1Components;
function RemainderImageHealth1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'RemainderImageHealth1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      RemainderImageHealth1Clock.reset();
      routineTimer.reset();
      RemainderImageHealth1MaxDurationReached = false;
      // update component parameters for each repeat
      health_remainder_1.setImage(food);
      psychoJS.experiment.addData('RemainderImageHealth1.started', globalClock.getTime());
      RemainderImageHealth1MaxDuration = null
      // keep track of which components have finished
      RemainderImageHealth1Components = [];
      RemainderImageHealth1Components.push(health_remainder_1);
      
      RemainderImageHealth1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function RemainderImageHealth1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'RemainderImageHealth1' ---
      // get current time
      t = RemainderImageHealth1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *health_remainder_1* updates
      if (t >= 0.0 && health_remainder_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        health_remainder_1.tStart = t;  // (not accounting for frame time here)
        health_remainder_1.frameNStart = frameN;  // exact frame index
        
        health_remainder_1.setAutoDraw(true);
      }
      
      
      // if health_remainder_1 is active this frame...
      if (health_remainder_1.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + remainder - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (health_remainder_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        health_remainder_1.tStop = t;  // not accounting for scr refresh
        health_remainder_1.frameNStop = frameN;  // exact frame index
        // update status
        health_remainder_1.status = PsychoJS.Status.FINISHED;
        health_remainder_1.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      RemainderImageHealth1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function RemainderImageHealth1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'RemainderImageHealth1' ---
      RemainderImageHealth1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('RemainderImageHealth1.stopped', globalClock.getTime());
      // the Routine "RemainderImageHealth1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var TooLateHealth1MaxDurationReached;
var TooLateHealth1MaxDuration;
var TooLateHealth1Components;
function TooLateHealth1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'TooLateHealth1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      TooLateHealth1Clock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      TooLateHealth1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from health_1_toolate_code
      if ((responded === 1)) {
          continueRoutine = false;
      }
      
      psychoJS.experiment.addData('TooLateHealth1.started', globalClock.getTime());
      TooLateHealth1MaxDuration = null
      // keep track of which components have finished
      TooLateHealth1Components = [];
      TooLateHealth1Components.push(health_1_tooLate_text);
      
      TooLateHealth1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function TooLateHealth1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'TooLateHealth1' ---
      // get current time
      t = TooLateHealth1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *health_1_tooLate_text* updates
      if (t >= 0.0 && health_1_tooLate_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        health_1_tooLate_text.tStart = t;  // (not accounting for frame time here)
        health_1_tooLate_text.frameNStart = frameN;  // exact frame index
        
        health_1_tooLate_text.setAutoDraw(true);
      }
      
      
      // if health_1_tooLate_text is active this frame...
      if (health_1_tooLate_text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (health_1_tooLate_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        health_1_tooLate_text.tStop = t;  // not accounting for scr refresh
        health_1_tooLate_text.frameNStop = frameN;  // exact frame index
        // update status
        health_1_tooLate_text.status = PsychoJS.Status.FINISHED;
        health_1_tooLate_text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      TooLateHealth1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function TooLateHealth1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'TooLateHealth1' ---
      TooLateHealth1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('TooLateHealth1.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (TooLateHealth1MaxDurationReached) {
          TooLateHealth1Clock.add(TooLateHealth1MaxDuration);
      } else {
          TooLateHealth1Clock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var EndOfBlock_health_1MaxDurationReached;
var _health_1_endblock_resp_allKeys;
var EndOfBlock_health_1MaxDuration;
var EndOfBlock_health_1Components;
function EndOfBlock_health_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'EndOfBlock_health_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      EndOfBlock_health_1Clock.reset();
      routineTimer.reset();
      EndOfBlock_health_1MaxDurationReached = false;
      // update component parameters for each repeat
      health_1_endblock_resp.keys = undefined;
      health_1_endblock_resp.rt = undefined;
      _health_1_endblock_resp_allKeys = [];
      // Run 'Begin Routine' code from health_1_endblock_code
      if ((health_first === 0)) {
          continueRoutine = false;
      }
      
      psychoJS.experiment.addData('EndOfBlock_health_1.started', globalClock.getTime());
      EndOfBlock_health_1MaxDuration = null
      // keep track of which components have finished
      EndOfBlock_health_1Components = [];
      EndOfBlock_health_1Components.push(health_1_endblock_text);
      EndOfBlock_health_1Components.push(health_1_endblock_resp);
      
      EndOfBlock_health_1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function EndOfBlock_health_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'EndOfBlock_health_1' ---
      // get current time
      t = EndOfBlock_health_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *health_1_endblock_text* updates
      if (t >= 0.0 && health_1_endblock_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        health_1_endblock_text.tStart = t;  // (not accounting for frame time here)
        health_1_endblock_text.frameNStart = frameN;  // exact frame index
        
        health_1_endblock_text.setAutoDraw(true);
      }
      
      
      // if health_1_endblock_text is active this frame...
      if (health_1_endblock_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *health_1_endblock_resp* updates
      if (t >= 0.0 && health_1_endblock_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        health_1_endblock_resp.tStart = t;  // (not accounting for frame time here)
        health_1_endblock_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { health_1_endblock_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { health_1_endblock_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { health_1_endblock_resp.clearEvents(); });
      }
      
      // if health_1_endblock_resp is active this frame...
      if (health_1_endblock_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = health_1_endblock_resp.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _health_1_endblock_resp_allKeys = _health_1_endblock_resp_allKeys.concat(theseKeys);
        if (_health_1_endblock_resp_allKeys.length > 0) {
          health_1_endblock_resp.keys = _health_1_endblock_resp_allKeys[_health_1_endblock_resp_allKeys.length - 1].name;  // just the last key pressed
          health_1_endblock_resp.rt = _health_1_endblock_resp_allKeys[_health_1_endblock_resp_allKeys.length - 1].rt;
          health_1_endblock_resp.duration = _health_1_endblock_resp_allKeys[_health_1_endblock_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      EndOfBlock_health_1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function EndOfBlock_health_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'EndOfBlock_health_1' ---
      EndOfBlock_health_1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('EndOfBlock_health_1.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(health_1_endblock_resp.corr, level);
      }
      psychoJS.experiment.addData('health_1_endblock_resp.keys', health_1_endblock_resp.keys);
      if (typeof health_1_endblock_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('health_1_endblock_resp.rt', health_1_endblock_resp.rt);
          psychoJS.experiment.addData('health_1_endblock_resp.duration', health_1_endblock_resp.duration);
          routineTimer.reset();
          }
      
      health_1_endblock_resp.stop();
      // the Routine "EndOfBlock_health_1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var TasteInstruction1MaxDurationReached;
var _taste_inst1_resp_allKeys;
var TasteInstruction1MaxDuration;
var TasteInstruction1Components;
function TasteInstruction1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'TasteInstruction1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      TasteInstruction1Clock.reset();
      routineTimer.reset();
      TasteInstruction1MaxDurationReached = false;
      // update component parameters for each repeat
      taste_inst1_resp.keys = undefined;
      taste_inst1_resp.rt = undefined;
      _taste_inst1_resp_allKeys = [];
      // Run 'Begin Routine' code from taste_inst1_code
      if ((run_taste === 0)) {
          continueRoutine = false;
      }
      
      psychoJS.experiment.addData('TasteInstruction1.started', globalClock.getTime());
      TasteInstruction1MaxDuration = null
      // keep track of which components have finished
      TasteInstruction1Components = [];
      TasteInstruction1Components.push(taste_inst1_text);
      TasteInstruction1Components.push(taste_inst1_resp);
      
      TasteInstruction1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function TasteInstruction1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'TasteInstruction1' ---
      // get current time
      t = TasteInstruction1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *taste_inst1_text* updates
      if (t >= 0.0 && taste_inst1_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        taste_inst1_text.tStart = t;  // (not accounting for frame time here)
        taste_inst1_text.frameNStart = frameN;  // exact frame index
        
        taste_inst1_text.setAutoDraw(true);
      }
      
      
      // if taste_inst1_text is active this frame...
      if (taste_inst1_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *taste_inst1_resp* updates
      if (t >= 0.0 && taste_inst1_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        taste_inst1_resp.tStart = t;  // (not accounting for frame time here)
        taste_inst1_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { taste_inst1_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { taste_inst1_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { taste_inst1_resp.clearEvents(); });
      }
      
      // if taste_inst1_resp is active this frame...
      if (taste_inst1_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = taste_inst1_resp.getKeys({
          keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
          waitRelease: false
        });
        _taste_inst1_resp_allKeys = _taste_inst1_resp_allKeys.concat(theseKeys);
        if (_taste_inst1_resp_allKeys.length > 0) {
          taste_inst1_resp.keys = _taste_inst1_resp_allKeys[_taste_inst1_resp_allKeys.length - 1].name;  // just the last key pressed
          taste_inst1_resp.rt = _taste_inst1_resp_allKeys[_taste_inst1_resp_allKeys.length - 1].rt;
          taste_inst1_resp.duration = _taste_inst1_resp_allKeys[_taste_inst1_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      TasteInstruction1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function TasteInstruction1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'TasteInstruction1' ---
      TasteInstruction1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('TasteInstruction1.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(taste_inst1_resp.corr, level);
      }
      psychoJS.experiment.addData('taste_inst1_resp.keys', taste_inst1_resp.keys);
      if (typeof taste_inst1_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('taste_inst1_resp.rt', taste_inst1_resp.rt);
          psychoJS.experiment.addData('taste_inst1_resp.duration', taste_inst1_resp.duration);
          routineTimer.reset();
          }
      
      taste_inst1_resp.stop();
      // the Routine "TasteInstruction1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var TasteInstruction2MaxDurationReached;
var _taste_inst2_resp_allKeys;
var TasteInstruction2MaxDuration;
var TasteInstruction2Components;
function TasteInstruction2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'TasteInstruction2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      TasteInstruction2Clock.reset();
      routineTimer.reset();
      TasteInstruction2MaxDurationReached = false;
      // update component parameters for each repeat
      taste_inst2_text.setText(taste_instruction2);
      taste_inst2_resp.keys = undefined;
      taste_inst2_resp.rt = undefined;
      _taste_inst2_resp_allKeys = [];
      // Run 'Begin Routine' code from taste_inst2_code
      if ((run_taste === 0)) {
          continueRoutine = false;
      }
      
      psychoJS.experiment.addData('TasteInstruction2.started', globalClock.getTime());
      TasteInstruction2MaxDuration = null
      // keep track of which components have finished
      TasteInstruction2Components = [];
      TasteInstruction2Components.push(taste_inst2_text);
      TasteInstruction2Components.push(taste_inst2_resp);
      
      TasteInstruction2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function TasteInstruction2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'TasteInstruction2' ---
      // get current time
      t = TasteInstruction2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *taste_inst2_text* updates
      if (t >= 0.0 && taste_inst2_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        taste_inst2_text.tStart = t;  // (not accounting for frame time here)
        taste_inst2_text.frameNStart = frameN;  // exact frame index
        
        taste_inst2_text.setAutoDraw(true);
      }
      
      
      // if taste_inst2_text is active this frame...
      if (taste_inst2_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *taste_inst2_resp* updates
      if (t >= 0.0 && taste_inst2_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        taste_inst2_resp.tStart = t;  // (not accounting for frame time here)
        taste_inst2_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { taste_inst2_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { taste_inst2_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { taste_inst2_resp.clearEvents(); });
      }
      
      // if taste_inst2_resp is active this frame...
      if (taste_inst2_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = taste_inst2_resp.getKeys({
          keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
          waitRelease: false
        });
        _taste_inst2_resp_allKeys = _taste_inst2_resp_allKeys.concat(theseKeys);
        if (_taste_inst2_resp_allKeys.length > 0) {
          taste_inst2_resp.keys = _taste_inst2_resp_allKeys[_taste_inst2_resp_allKeys.length - 1].name;  // just the last key pressed
          taste_inst2_resp.rt = _taste_inst2_resp_allKeys[_taste_inst2_resp_allKeys.length - 1].rt;
          taste_inst2_resp.duration = _taste_inst2_resp_allKeys[_taste_inst2_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      TasteInstruction2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function TasteInstruction2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'TasteInstruction2' ---
      TasteInstruction2Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('TasteInstruction2.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(taste_inst2_resp.corr, level);
      }
      psychoJS.experiment.addData('taste_inst2_resp.keys', taste_inst2_resp.keys);
      if (typeof taste_inst2_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('taste_inst2_resp.rt', taste_inst2_resp.rt);
          psychoJS.experiment.addData('taste_inst2_resp.duration', taste_inst2_resp.duration);
          routineTimer.reset();
          }
      
      taste_inst2_resp.stop();
      // the Routine "TasteInstruction2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var TasteInstruction3MaxDurationReached;
var _taste_inst3_resp_allKeys;
var TasteInstruction3MaxDuration;
var TasteInstruction3Components;
function TasteInstruction3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'TasteInstruction3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      TasteInstruction3Clock.reset();
      routineTimer.reset();
      TasteInstruction3MaxDurationReached = false;
      // update component parameters for each repeat
      taste_inst3_resp.keys = undefined;
      taste_inst3_resp.rt = undefined;
      _taste_inst3_resp_allKeys = [];
      // Run 'Begin Routine' code from taste_inst3_code
      if ((run_taste === 0)) {
          continueRoutine = false;
      }
      
      psychoJS.experiment.addData('TasteInstruction3.started', globalClock.getTime());
      TasteInstruction3MaxDuration = null
      // keep track of which components have finished
      TasteInstruction3Components = [];
      TasteInstruction3Components.push(taste_inst3_text);
      TasteInstruction3Components.push(taste_inst3_resp);
      
      TasteInstruction3Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function TasteInstruction3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'TasteInstruction3' ---
      // get current time
      t = TasteInstruction3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *taste_inst3_text* updates
      if (t >= 0.0 && taste_inst3_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        taste_inst3_text.tStart = t;  // (not accounting for frame time here)
        taste_inst3_text.frameNStart = frameN;  // exact frame index
        
        taste_inst3_text.setAutoDraw(true);
      }
      
      
      // if taste_inst3_text is active this frame...
      if (taste_inst3_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *taste_inst3_resp* updates
      if (t >= 0.0 && taste_inst3_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        taste_inst3_resp.tStart = t;  // (not accounting for frame time here)
        taste_inst3_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { taste_inst3_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { taste_inst3_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { taste_inst3_resp.clearEvents(); });
      }
      
      // if taste_inst3_resp is active this frame...
      if (taste_inst3_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = taste_inst3_resp.getKeys({
          keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
          waitRelease: false
        });
        _taste_inst3_resp_allKeys = _taste_inst3_resp_allKeys.concat(theseKeys);
        if (_taste_inst3_resp_allKeys.length > 0) {
          taste_inst3_resp.keys = _taste_inst3_resp_allKeys[_taste_inst3_resp_allKeys.length - 1].name;  // just the last key pressed
          taste_inst3_resp.rt = _taste_inst3_resp_allKeys[_taste_inst3_resp_allKeys.length - 1].rt;
          taste_inst3_resp.duration = _taste_inst3_resp_allKeys[_taste_inst3_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      TasteInstruction3Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function TasteInstruction3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'TasteInstruction3' ---
      TasteInstruction3Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('TasteInstruction3.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(taste_inst3_resp.corr, level);
      }
      psychoJS.experiment.addData('taste_inst3_resp.keys', taste_inst3_resp.keys);
      if (typeof taste_inst3_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('taste_inst3_resp.rt', taste_inst3_resp.rt);
          psychoJS.experiment.addData('taste_inst3_resp.duration', taste_inst3_resp.duration);
          routineTimer.reset();
          }
      
      taste_inst3_resp.stop();
      // the Routine "TasteInstruction3" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var FixationTasteMaxDurationReached;
var FixationTasteMaxDuration;
var FixationTasteComponents;
function FixationTasteRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'FixationTaste' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      FixationTasteClock.reset();
      routineTimer.reset();
      FixationTasteMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from taste_fix_code
      if ((trials_taste.thisN === 0)) {
          trials_start_time_taste = globalClock.getTime();
      }
      fixation_duration = ((trialstart + trials_start_time_taste) - globalClock.getTime());
      psychoJS.experiment.addData("fixation_duration", fixation_duration);
      
      taste_fixationcross_text.setText('+');
      psychoJS.experiment.addData('FixationTaste.started', globalClock.getTime());
      FixationTasteMaxDuration = null
      // keep track of which components have finished
      FixationTasteComponents = [];
      FixationTasteComponents.push(taste_fixationcross_text);
      
      FixationTasteComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function FixationTasteRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'FixationTaste' ---
      // get current time
      t = FixationTasteClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *taste_fixationcross_text* updates
      if (t >= 0.0 && taste_fixationcross_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        taste_fixationcross_text.tStart = t;  // (not accounting for frame time here)
        taste_fixationcross_text.frameNStart = frameN;  // exact frame index
        
        taste_fixationcross_text.setAutoDraw(true);
      }
      
      
      // if taste_fixationcross_text is active this frame...
      if (taste_fixationcross_text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + fixation_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (taste_fixationcross_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        taste_fixationcross_text.tStop = t;  // not accounting for scr refresh
        taste_fixationcross_text.frameNStop = frameN;  // exact frame index
        // update status
        taste_fixationcross_text.status = PsychoJS.Status.FINISHED;
        taste_fixationcross_text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      FixationTasteComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function FixationTasteRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'FixationTaste' ---
      FixationTasteComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('FixationTaste.stopped', globalClock.getTime());
      // the Routine "FixationTaste" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var FoodImageTasteMaxDurationReached;
var _key_resp_taste_allKeys;
var FoodImageTasteMaxDuration;
var FoodImageTasteComponents;
function FoodImageTasteRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'FoodImageTaste' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      FoodImageTasteClock.reset(routineTimer.getTime());
      routineTimer.add(4.000000);
      FoodImageTasteMaxDurationReached = false;
      // update component parameters for each repeat
      food_image_taste.setImage(food);
      rating_taste.setText(rating_text_taste);
      key_resp_taste.keys = undefined;
      key_resp_taste.rt = undefined;
      _key_resp_taste_allKeys = [];
      // Run 'Begin Routine' code from taste_image_code
      image_started_time = globalClock.getTime();
      
      psychoJS.experiment.addData('FoodImageTaste.started', globalClock.getTime());
      FoodImageTasteMaxDuration = null
      // keep track of which components have finished
      FoodImageTasteComponents = [];
      FoodImageTasteComponents.push(food_image_taste);
      FoodImageTasteComponents.push(rating_taste);
      FoodImageTasteComponents.push(key_resp_taste);
      
      FoodImageTasteComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function FoodImageTasteRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'FoodImageTaste' ---
      // get current time
      t = FoodImageTasteClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *food_image_taste* updates
      if (t >= 0.0 && food_image_taste.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        food_image_taste.tStart = t;  // (not accounting for frame time here)
        food_image_taste.frameNStart = frameN;  // exact frame index
        
        food_image_taste.setAutoDraw(true);
      }
      
      
      // if food_image_taste is active this frame...
      if (food_image_taste.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (food_image_taste.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        food_image_taste.tStop = t;  // not accounting for scr refresh
        food_image_taste.frameNStop = frameN;  // exact frame index
        // update status
        food_image_taste.status = PsychoJS.Status.FINISHED;
        food_image_taste.setAutoDraw(false);
      }
      
      
      // *rating_taste* updates
      if (t >= 0.0 && rating_taste.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        rating_taste.tStart = t;  // (not accounting for frame time here)
        rating_taste.frameNStart = frameN;  // exact frame index
        
        rating_taste.setAutoDraw(true);
      }
      
      
      // if rating_taste is active this frame...
      if (rating_taste.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (rating_taste.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        rating_taste.tStop = t;  // not accounting for scr refresh
        rating_taste.frameNStop = frameN;  // exact frame index
        // update status
        rating_taste.status = PsychoJS.Status.FINISHED;
        rating_taste.setAutoDraw(false);
      }
      
      
      // *key_resp_taste* updates
      if (t >= 0.0 && key_resp_taste.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_taste.tStart = t;  // (not accounting for frame time here)
        key_resp_taste.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_taste.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_taste.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_taste.clearEvents(); });
      }
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_taste.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_taste.tStop = t;  // not accounting for scr refresh
        key_resp_taste.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_taste.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (key_resp_taste.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          key_resp_taste.tStop = t;  // not accounting for scr refresh
          key_resp_taste.frameNStop = frameN;  // exact frame index
          // update status
          key_resp_taste.status = PsychoJS.Status.FINISHED;
          key_resp_taste.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if key_resp_taste is active this frame...
        if (key_resp_taste.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_taste.getKeys({
            keyList: typeof [] === 'string' ? [[]] : [], 
            waitRelease: false
          });
          _key_resp_taste_allKeys = _key_resp_taste_allKeys.concat(theseKeys);
          if (_key_resp_taste_allKeys.length > 0) {
            key_resp_taste.keys = _key_resp_taste_allKeys[_key_resp_taste_allKeys.length - 1].name;  // just the last key pressed
            key_resp_taste.rt = _key_resp_taste_allKeys[_key_resp_taste_allKeys.length - 1].rt;
            key_resp_taste.duration = _key_resp_taste_allKeys[_key_resp_taste_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        FoodImageTasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function FoodImageTasteRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'FoodImageTaste' ---
        FoodImageTasteComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('FoodImageTaste.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_taste.corr, level);
        }
        psychoJS.experiment.addData('key_resp_taste.keys', key_resp_taste.keys);
        if (typeof key_resp_taste.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_taste.rt', key_resp_taste.rt);
            psychoJS.experiment.addData('key_resp_taste.duration', key_resp_taste.duration);
            routineTimer.reset();
            }
        
        key_resp_taste.stop();
        // Run 'End Routine' code from taste_image_code
        image_ended_time = globalClock.getTime();
        remainder = ((4.0 - image_ended_time) + image_started_time);
        responded = 0;
        wrongkey = 0;
        food_item = trials_taste.thisTrial["food_item"];
        if (key_resp_taste.keys) {
            responded = 1;
            rating_given = key_resp_taste.keys.slice((- 1))[0].toString();
            if ((((((rating_given === "1") || (rating_given === "2")) || (rating_given === "3")) || (rating_given === "4")) || (rating_given === "5"))) {
                integer_rating = Number.parseInt(rating_given);
                if (((expInfo["condition"] === 1) || (expInfo["condition"] === "1"))) {
                    taste_ratings[food_item] = integer_rating;
                } else {
                    taste_ratings[food_item] = (6 - integer_rating);
                }
                psychoJS.experiment.addData("taste_rating", taste_ratings[food_item]);
            } else {
                wrongkey = 1;
                remainder = 0;
            }
        }
        
        if (routineForceEnded) {
            routineTimer.reset();} else if (FoodImageTasteMaxDurationReached) {
            FoodImageTasteClock.add(FoodImageTasteMaxDuration);
        } else {
            FoodImageTasteClock.add(4.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var WrongKeyTasteMaxDurationReached;
var WrongKeyTasteMaxDuration;
var WrongKeyTasteComponents;
function WrongKeyTasteRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'WrongKeyTaste' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        WrongKeyTasteClock.reset(routineTimer.getTime());
        routineTimer.add(1.000000);
        WrongKeyTasteMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from wk_taste_code
        if ((wrongkey === 0)) {
            continueRoutine = false;
        }
        
        psychoJS.experiment.addData('WrongKeyTaste.started', globalClock.getTime());
        WrongKeyTasteMaxDuration = null
        // keep track of which components have finished
        WrongKeyTasteComponents = [];
        WrongKeyTasteComponents.push(wrongkeytaste);
        
        WrongKeyTasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function WrongKeyTasteRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'WrongKeyTaste' ---
        // get current time
        t = WrongKeyTasteClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *wrongkeytaste* updates
        if (t >= 0.0 && wrongkeytaste.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          wrongkeytaste.tStart = t;  // (not accounting for frame time here)
          wrongkeytaste.frameNStart = frameN;  // exact frame index
          
          wrongkeytaste.setAutoDraw(true);
        }
        
        
        // if wrongkeytaste is active this frame...
        if (wrongkeytaste.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (wrongkeytaste.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          wrongkeytaste.tStop = t;  // not accounting for scr refresh
          wrongkeytaste.frameNStop = frameN;  // exact frame index
          // update status
          wrongkeytaste.status = PsychoJS.Status.FINISHED;
          wrongkeytaste.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        WrongKeyTasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function WrongKeyTasteRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'WrongKeyTaste' ---
        WrongKeyTasteComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('WrongKeyTaste.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (WrongKeyTasteMaxDurationReached) {
            WrongKeyTasteClock.add(WrongKeyTasteMaxDuration);
        } else {
            WrongKeyTasteClock.add(1.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var RemainderImageTasteMaxDurationReached;
var RemainderImageTasteMaxDuration;
var RemainderImageTasteComponents;
function RemainderImageTasteRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'RemainderImageTaste' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        RemainderImageTasteClock.reset();
        routineTimer.reset();
        RemainderImageTasteMaxDurationReached = false;
        // update component parameters for each repeat
        taste_remainder.setImage(food);
        psychoJS.experiment.addData('RemainderImageTaste.started', globalClock.getTime());
        RemainderImageTasteMaxDuration = null
        // keep track of which components have finished
        RemainderImageTasteComponents = [];
        RemainderImageTasteComponents.push(taste_remainder);
        
        RemainderImageTasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function RemainderImageTasteRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'RemainderImageTaste' ---
        // get current time
        t = RemainderImageTasteClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *taste_remainder* updates
        if (t >= 0.0 && taste_remainder.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          taste_remainder.tStart = t;  // (not accounting for frame time here)
          taste_remainder.frameNStart = frameN;  // exact frame index
          
          taste_remainder.setAutoDraw(true);
        }
        
        
        // if taste_remainder is active this frame...
        if (taste_remainder.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + remainder - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (taste_remainder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          taste_remainder.tStop = t;  // not accounting for scr refresh
          taste_remainder.frameNStop = frameN;  // exact frame index
          // update status
          taste_remainder.status = PsychoJS.Status.FINISHED;
          taste_remainder.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        RemainderImageTasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function RemainderImageTasteRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'RemainderImageTaste' ---
        RemainderImageTasteComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('RemainderImageTaste.stopped', globalClock.getTime());
        // the Routine "RemainderImageTaste" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var TooLateTasteMaxDurationReached;
var TooLateTasteMaxDuration;
var TooLateTasteComponents;
function TooLateTasteRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'TooLateTaste' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        TooLateTasteClock.reset(routineTimer.getTime());
        routineTimer.add(1.000000);
        TooLateTasteMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from taste_toolate_code
        if ((responded === 1)) {
            continueRoutine = false;
        }
        
        psychoJS.experiment.addData('TooLateTaste.started', globalClock.getTime());
        TooLateTasteMaxDuration = null
        // keep track of which components have finished
        TooLateTasteComponents = [];
        TooLateTasteComponents.push(taste_tooLate_text);
        
        TooLateTasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function TooLateTasteRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'TooLateTaste' ---
        // get current time
        t = TooLateTasteClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *taste_tooLate_text* updates
        if (t >= 0.0 && taste_tooLate_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          taste_tooLate_text.tStart = t;  // (not accounting for frame time here)
          taste_tooLate_text.frameNStart = frameN;  // exact frame index
          
          taste_tooLate_text.setAutoDraw(true);
        }
        
        
        // if taste_tooLate_text is active this frame...
        if (taste_tooLate_text.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (taste_tooLate_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          taste_tooLate_text.tStop = t;  // not accounting for scr refresh
          taste_tooLate_text.frameNStop = frameN;  // exact frame index
          // update status
          taste_tooLate_text.status = PsychoJS.Status.FINISHED;
          taste_tooLate_text.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        TooLateTasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function TooLateTasteRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'TooLateTaste' ---
        TooLateTasteComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('TooLateTaste.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (TooLateTasteMaxDurationReached) {
            TooLateTasteClock.add(TooLateTasteMaxDuration);
        } else {
            TooLateTasteClock.add(1.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var EndOfBlock_tasteMaxDurationReached;
var _taste_endblock_resp_allKeys;
var EndOfBlock_tasteMaxDuration;
var EndOfBlock_tasteComponents;
function EndOfBlock_tasteRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'EndOfBlock_taste' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        EndOfBlock_tasteClock.reset();
        routineTimer.reset();
        EndOfBlock_tasteMaxDurationReached = false;
        // update component parameters for each repeat
        taste_endblock_resp.keys = undefined;
        taste_endblock_resp.rt = undefined;
        _taste_endblock_resp_allKeys = [];
        // Run 'Begin Routine' code from taste_endblock_code
        if ((run_taste === 0)) {
            continueRoutine = false;
        }
        
        psychoJS.experiment.addData('EndOfBlock_taste.started', globalClock.getTime());
        EndOfBlock_tasteMaxDuration = null
        // keep track of which components have finished
        EndOfBlock_tasteComponents = [];
        EndOfBlock_tasteComponents.push(taste_endblock_text);
        EndOfBlock_tasteComponents.push(taste_endblock_resp);
        
        EndOfBlock_tasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function EndOfBlock_tasteRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'EndOfBlock_taste' ---
        // get current time
        t = EndOfBlock_tasteClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *taste_endblock_text* updates
        if (t >= 0.0 && taste_endblock_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          taste_endblock_text.tStart = t;  // (not accounting for frame time here)
          taste_endblock_text.frameNStart = frameN;  // exact frame index
          
          taste_endblock_text.setAutoDraw(true);
        }
        
        
        // if taste_endblock_text is active this frame...
        if (taste_endblock_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *taste_endblock_resp* updates
        if (t >= 0.0 && taste_endblock_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          taste_endblock_resp.tStart = t;  // (not accounting for frame time here)
          taste_endblock_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { taste_endblock_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { taste_endblock_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { taste_endblock_resp.clearEvents(); });
        }
        
        // if taste_endblock_resp is active this frame...
        if (taste_endblock_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = taste_endblock_resp.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _taste_endblock_resp_allKeys = _taste_endblock_resp_allKeys.concat(theseKeys);
          if (_taste_endblock_resp_allKeys.length > 0) {
            taste_endblock_resp.keys = _taste_endblock_resp_allKeys[_taste_endblock_resp_allKeys.length - 1].name;  // just the last key pressed
            taste_endblock_resp.rt = _taste_endblock_resp_allKeys[_taste_endblock_resp_allKeys.length - 1].rt;
            taste_endblock_resp.duration = _taste_endblock_resp_allKeys[_taste_endblock_resp_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        EndOfBlock_tasteComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function EndOfBlock_tasteRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'EndOfBlock_taste' ---
        EndOfBlock_tasteComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('EndOfBlock_taste.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(taste_endblock_resp.corr, level);
        }
        psychoJS.experiment.addData('taste_endblock_resp.keys', taste_endblock_resp.keys);
        if (typeof taste_endblock_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('taste_endblock_resp.rt', taste_endblock_resp.rt);
            psychoJS.experiment.addData('taste_endblock_resp.duration', taste_endblock_resp.duration);
            routineTimer.reset();
            }
        
        taste_endblock_resp.stop();
        // the Routine "EndOfBlock_taste" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var HealthInstruction1_2MaxDurationReached;
var _health_inst1_2_resp_allKeys;
var HealthInstruction1_2MaxDuration;
var HealthInstruction1_2Components;
function HealthInstruction1_2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'HealthInstruction1_2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        HealthInstruction1_2Clock.reset();
        routineTimer.reset();
        HealthInstruction1_2MaxDurationReached = false;
        // update component parameters for each repeat
        health_inst1_2_resp.keys = undefined;
        health_inst1_2_resp.rt = undefined;
        _health_inst1_2_resp_allKeys = [];
        // Run 'Begin Routine' code from health_inst1_2_code
        if ((health_second === 0)) {
            continueRoutine = false;
        }
        
        psychoJS.experiment.addData('HealthInstruction1_2.started', globalClock.getTime());
        HealthInstruction1_2MaxDuration = null
        // keep track of which components have finished
        HealthInstruction1_2Components = [];
        HealthInstruction1_2Components.push(health_inst1_2_text);
        HealthInstruction1_2Components.push(health_inst1_2_resp);
        
        HealthInstruction1_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function HealthInstruction1_2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'HealthInstruction1_2' ---
        // get current time
        t = HealthInstruction1_2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *health_inst1_2_text* updates
        if (t >= 0.0 && health_inst1_2_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          health_inst1_2_text.tStart = t;  // (not accounting for frame time here)
          health_inst1_2_text.frameNStart = frameN;  // exact frame index
          
          health_inst1_2_text.setAutoDraw(true);
        }
        
        
        // if health_inst1_2_text is active this frame...
        if (health_inst1_2_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *health_inst1_2_resp* updates
        if (t >= 0.0 && health_inst1_2_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          health_inst1_2_resp.tStart = t;  // (not accounting for frame time here)
          health_inst1_2_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { health_inst1_2_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { health_inst1_2_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { health_inst1_2_resp.clearEvents(); });
        }
        
        // if health_inst1_2_resp is active this frame...
        if (health_inst1_2_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = health_inst1_2_resp.getKeys({
            keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
            waitRelease: false
          });
          _health_inst1_2_resp_allKeys = _health_inst1_2_resp_allKeys.concat(theseKeys);
          if (_health_inst1_2_resp_allKeys.length > 0) {
            health_inst1_2_resp.keys = _health_inst1_2_resp_allKeys[_health_inst1_2_resp_allKeys.length - 1].name;  // just the last key pressed
            health_inst1_2_resp.rt = _health_inst1_2_resp_allKeys[_health_inst1_2_resp_allKeys.length - 1].rt;
            health_inst1_2_resp.duration = _health_inst1_2_resp_allKeys[_health_inst1_2_resp_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        HealthInstruction1_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function HealthInstruction1_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'HealthInstruction1_2' ---
        HealthInstruction1_2Components.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('HealthInstruction1_2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(health_inst1_2_resp.corr, level);
        }
        psychoJS.experiment.addData('health_inst1_2_resp.keys', health_inst1_2_resp.keys);
        if (typeof health_inst1_2_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('health_inst1_2_resp.rt', health_inst1_2_resp.rt);
            psychoJS.experiment.addData('health_inst1_2_resp.duration', health_inst1_2_resp.duration);
            routineTimer.reset();
            }
        
        health_inst1_2_resp.stop();
        // the Routine "HealthInstruction1_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var HealthInstruction2_2MaxDurationReached;
var _health_inst2_2_resp_allKeys;
var HealthInstruction2_2MaxDuration;
var HealthInstruction2_2Components;
function HealthInstruction2_2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'HealthInstruction2_2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        HealthInstruction2_2Clock.reset();
        routineTimer.reset();
        HealthInstruction2_2MaxDurationReached = false;
        // update component parameters for each repeat
        health_inst2_2_text.setText(health_instruction2);
        health_inst2_2_resp.keys = undefined;
        health_inst2_2_resp.rt = undefined;
        _health_inst2_2_resp_allKeys = [];
        // Run 'Begin Routine' code from health_inst2_2_code
        if ((health_second === 0)) {
            continueRoutine = false;
        }
        
        psychoJS.experiment.addData('HealthInstruction2_2.started', globalClock.getTime());
        HealthInstruction2_2MaxDuration = null
        // keep track of which components have finished
        HealthInstruction2_2Components = [];
        HealthInstruction2_2Components.push(health_inst2_2_text);
        HealthInstruction2_2Components.push(health_inst2_2_resp);
        
        HealthInstruction2_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function HealthInstruction2_2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'HealthInstruction2_2' ---
        // get current time
        t = HealthInstruction2_2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *health_inst2_2_text* updates
        if (t >= 0.0 && health_inst2_2_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          health_inst2_2_text.tStart = t;  // (not accounting for frame time here)
          health_inst2_2_text.frameNStart = frameN;  // exact frame index
          
          health_inst2_2_text.setAutoDraw(true);
        }
        
        
        // if health_inst2_2_text is active this frame...
        if (health_inst2_2_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *health_inst2_2_resp* updates
        if (t >= 0.0 && health_inst2_2_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          health_inst2_2_resp.tStart = t;  // (not accounting for frame time here)
          health_inst2_2_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { health_inst2_2_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { health_inst2_2_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { health_inst2_2_resp.clearEvents(); });
        }
        
        // if health_inst2_2_resp is active this frame...
        if (health_inst2_2_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = health_inst2_2_resp.getKeys({
            keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
            waitRelease: false
          });
          _health_inst2_2_resp_allKeys = _health_inst2_2_resp_allKeys.concat(theseKeys);
          if (_health_inst2_2_resp_allKeys.length > 0) {
            health_inst2_2_resp.keys = _health_inst2_2_resp_allKeys[_health_inst2_2_resp_allKeys.length - 1].name;  // just the last key pressed
            health_inst2_2_resp.rt = _health_inst2_2_resp_allKeys[_health_inst2_2_resp_allKeys.length - 1].rt;
            health_inst2_2_resp.duration = _health_inst2_2_resp_allKeys[_health_inst2_2_resp_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        HealthInstruction2_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function HealthInstruction2_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'HealthInstruction2_2' ---
        HealthInstruction2_2Components.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('HealthInstruction2_2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(health_inst2_2_resp.corr, level);
        }
        psychoJS.experiment.addData('health_inst2_2_resp.keys', health_inst2_2_resp.keys);
        if (typeof health_inst2_2_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('health_inst2_2_resp.rt', health_inst2_2_resp.rt);
            psychoJS.experiment.addData('health_inst2_2_resp.duration', health_inst2_2_resp.duration);
            routineTimer.reset();
            }
        
        health_inst2_2_resp.stop();
        // the Routine "HealthInstruction2_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var HealthInstruction3_2MaxDurationReached;
var _health_inst3_2_resp_allKeys;
var HealthInstruction3_2MaxDuration;
var HealthInstruction3_2Components;
function HealthInstruction3_2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'HealthInstruction3_2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        HealthInstruction3_2Clock.reset();
        routineTimer.reset();
        HealthInstruction3_2MaxDurationReached = false;
        // update component parameters for each repeat
        health_inst3_2_resp.keys = undefined;
        health_inst3_2_resp.rt = undefined;
        _health_inst3_2_resp_allKeys = [];
        // Run 'Begin Routine' code from health_inst3_2_code
        if ((health_second === 0)) {
            continueRoutine = false;
        }
        
        psychoJS.experiment.addData('HealthInstruction3_2.started', globalClock.getTime());
        HealthInstruction3_2MaxDuration = null
        // keep track of which components have finished
        HealthInstruction3_2Components = [];
        HealthInstruction3_2Components.push(health_inst3_2_text);
        HealthInstruction3_2Components.push(health_inst3_2_resp);
        
        HealthInstruction3_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function HealthInstruction3_2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'HealthInstruction3_2' ---
        // get current time
        t = HealthInstruction3_2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *health_inst3_2_text* updates
        if (t >= 0.0 && health_inst3_2_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          health_inst3_2_text.tStart = t;  // (not accounting for frame time here)
          health_inst3_2_text.frameNStart = frameN;  // exact frame index
          
          health_inst3_2_text.setAutoDraw(true);
        }
        
        
        // if health_inst3_2_text is active this frame...
        if (health_inst3_2_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *health_inst3_2_resp* updates
        if (t >= 0.0 && health_inst3_2_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          health_inst3_2_resp.tStart = t;  // (not accounting for frame time here)
          health_inst3_2_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { health_inst3_2_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { health_inst3_2_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { health_inst3_2_resp.clearEvents(); });
        }
        
        // if health_inst3_2_resp is active this frame...
        if (health_inst3_2_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = health_inst3_2_resp.getKeys({
            keyList: typeof ['1','space'] === 'string' ? [['1','space']] : ['1','space'], 
            waitRelease: false
          });
          _health_inst3_2_resp_allKeys = _health_inst3_2_resp_allKeys.concat(theseKeys);
          if (_health_inst3_2_resp_allKeys.length > 0) {
            health_inst3_2_resp.keys = _health_inst3_2_resp_allKeys[_health_inst3_2_resp_allKeys.length - 1].name;  // just the last key pressed
            health_inst3_2_resp.rt = _health_inst3_2_resp_allKeys[_health_inst3_2_resp_allKeys.length - 1].rt;
            health_inst3_2_resp.duration = _health_inst3_2_resp_allKeys[_health_inst3_2_resp_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        HealthInstruction3_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function HealthInstruction3_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'HealthInstruction3_2' ---
        HealthInstruction3_2Components.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('HealthInstruction3_2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(health_inst3_2_resp.corr, level);
        }
        psychoJS.experiment.addData('health_inst3_2_resp.keys', health_inst3_2_resp.keys);
        if (typeof health_inst3_2_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('health_inst3_2_resp.rt', health_inst3_2_resp.rt);
            psychoJS.experiment.addData('health_inst3_2_resp.duration', health_inst3_2_resp.duration);
            routineTimer.reset();
            }
        
        health_inst3_2_resp.stop();
        // the Routine "HealthInstruction3_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var FixationHealth2MaxDurationReached;
var FixationHealth2MaxDuration;
var FixationHealth2Components;
function FixationHealth2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'FixationHealth2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        FixationHealth2Clock.reset();
        routineTimer.reset();
        FixationHealth2MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from health_fix_2_code
        if ((trials_health2.thisN === 0)) {
            trials_start_time_health2 = globalClock.getTime();
        }
        fixation_duration = ((trialstart + trials_start_time_health2) - globalClock.getTime());
        psychoJS.experiment.addData("fixation_duration", fixation_duration);
        
        health_fixationcross_2_text.setText('+');
        psychoJS.experiment.addData('FixationHealth2.started', globalClock.getTime());
        FixationHealth2MaxDuration = null
        // keep track of which components have finished
        FixationHealth2Components = [];
        FixationHealth2Components.push(health_fixationcross_2_text);
        
        FixationHealth2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function FixationHealth2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'FixationHealth2' ---
        // get current time
        t = FixationHealth2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *health_fixationcross_2_text* updates
        if (t >= 0.0 && health_fixationcross_2_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          health_fixationcross_2_text.tStart = t;  // (not accounting for frame time here)
          health_fixationcross_2_text.frameNStart = frameN;  // exact frame index
          
          health_fixationcross_2_text.setAutoDraw(true);
        }
        
        
        // if health_fixationcross_2_text is active this frame...
        if (health_fixationcross_2_text.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + fixation_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (health_fixationcross_2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          health_fixationcross_2_text.tStop = t;  // not accounting for scr refresh
          health_fixationcross_2_text.frameNStop = frameN;  // exact frame index
          // update status
          health_fixationcross_2_text.status = PsychoJS.Status.FINISHED;
          health_fixationcross_2_text.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        FixationHealth2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function FixationHealth2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'FixationHealth2' ---
        FixationHealth2Components.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('FixationHealth2.stopped', globalClock.getTime());
        // the Routine "FixationHealth2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var FoodImageHealth2MaxDurationReached;
var _key_resp_health2_allKeys;
var FoodImageHealth2MaxDuration;
var FoodImageHealth2Components;
function FoodImageHealth2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'FoodImageHealth2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        FoodImageHealth2Clock.reset(routineTimer.getTime());
        routineTimer.add(4.000000);
        FoodImageHealth2MaxDurationReached = false;
        // update component parameters for each repeat
        food_image_health2.setImage(food);
        rating_health2.setText(rating_text_health);
        key_resp_health2.keys = undefined;
        key_resp_health2.rt = undefined;
        _key_resp_health2_allKeys = [];
        // Run 'Begin Routine' code from health_2_image_code
        image_started_time = globalClock.getTime();
        
        psychoJS.experiment.addData('FoodImageHealth2.started', globalClock.getTime());
        FoodImageHealth2MaxDuration = null
        // keep track of which components have finished
        FoodImageHealth2Components = [];
        FoodImageHealth2Components.push(food_image_health2);
        FoodImageHealth2Components.push(rating_health2);
        FoodImageHealth2Components.push(key_resp_health2);
        
        FoodImageHealth2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function FoodImageHealth2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'FoodImageHealth2' ---
        // get current time
        t = FoodImageHealth2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *food_image_health2* updates
        if (t >= 0.0 && food_image_health2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          food_image_health2.tStart = t;  // (not accounting for frame time here)
          food_image_health2.frameNStart = frameN;  // exact frame index
          
          food_image_health2.setAutoDraw(true);
        }
        
        
        // if food_image_health2 is active this frame...
        if (food_image_health2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (food_image_health2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          food_image_health2.tStop = t;  // not accounting for scr refresh
          food_image_health2.frameNStop = frameN;  // exact frame index
          // update status
          food_image_health2.status = PsychoJS.Status.FINISHED;
          food_image_health2.setAutoDraw(false);
        }
        
        
        // *rating_health2* updates
        if (t >= 0.0 && rating_health2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          rating_health2.tStart = t;  // (not accounting for frame time here)
          rating_health2.frameNStart = frameN;  // exact frame index
          
          rating_health2.setAutoDraw(true);
        }
        
        
        // if rating_health2 is active this frame...
        if (rating_health2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (rating_health2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          rating_health2.tStop = t;  // not accounting for scr refresh
          rating_health2.frameNStop = frameN;  // exact frame index
          // update status
          rating_health2.status = PsychoJS.Status.FINISHED;
          rating_health2.setAutoDraw(false);
        }
        
        
        // *key_resp_health2* updates
        if (t >= 0.0 && key_resp_health2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp_health2.tStart = t;  // (not accounting for frame time here)
          key_resp_health2.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp_health2.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp_health2.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp_health2.clearEvents(); });
        }
        frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (key_resp_health2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          key_resp_health2.tStop = t;  // not accounting for scr refresh
          key_resp_health2.frameNStop = frameN;  // exact frame index
          // update status
          key_resp_health2.status = PsychoJS.Status.FINISHED;
          frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (key_resp_health2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            key_resp_health2.tStop = t;  // not accounting for scr refresh
            key_resp_health2.frameNStop = frameN;  // exact frame index
            // update status
            key_resp_health2.status = PsychoJS.Status.FINISHED;
            key_resp_health2.status = PsychoJS.Status.FINISHED;
              }
            
          }
          
          // if key_resp_health2 is active this frame...
          if (key_resp_health2.status === PsychoJS.Status.STARTED) {
            let theseKeys = key_resp_health2.getKeys({
              keyList: typeof [] === 'string' ? [[]] : [], 
              waitRelease: false
            });
            _key_resp_health2_allKeys = _key_resp_health2_allKeys.concat(theseKeys);
            if (_key_resp_health2_allKeys.length > 0) {
              key_resp_health2.keys = _key_resp_health2_allKeys[_key_resp_health2_allKeys.length - 1].name;  // just the last key pressed
              key_resp_health2.rt = _key_resp_health2_allKeys[_key_resp_health2_allKeys.length - 1].rt;
              key_resp_health2.duration = _key_resp_health2_allKeys[_key_resp_health2_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          FoodImageHealth2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine && routineTimer.getTime() > 0) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function FoodImageHealth2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'FoodImageHealth2' ---
          FoodImageHealth2Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('FoodImageHealth2.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(key_resp_health2.corr, level);
          }
          psychoJS.experiment.addData('key_resp_health2.keys', key_resp_health2.keys);
          if (typeof key_resp_health2.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('key_resp_health2.rt', key_resp_health2.rt);
              psychoJS.experiment.addData('key_resp_health2.duration', key_resp_health2.duration);
              routineTimer.reset();
              }
          
          key_resp_health2.stop();
          // Run 'End Routine' code from health_2_image_code
          image_ended_time = globalClock.getTime();
          remainder = ((4.0 - image_ended_time) + image_started_time);
          responded = 0;
          wrongkey = 0;
          food_item = trials_health2.thisTrial["food_item"];
          if (key_resp_health2.keys) {
              responded = 1;
              rating_given = key_resp_health2.keys.slice((- 1))[0].toString();
              if ((((((rating_given === "1") || (rating_given === "2")) || (rating_given === "3")) || (rating_given === "4")) || (rating_given === "5"))) {
                  integer_rating = Number.parseInt(rating_given);
                  if (((expInfo["condition"] === 1) || (expInfo["condition"] === "1"))) {
                      health_ratings[food_item] = integer_rating;
                  } else {
                      health_ratings[food_item] = (6 - integer_rating);
                  }
                  psychoJS.experiment.addData("health_rating", health_ratings[food_item]);
              } else {
                  wrongkey = 1;
                  remainder = 0;
              }
          }
          
          if (routineForceEnded) {
              routineTimer.reset();} else if (FoodImageHealth2MaxDurationReached) {
              FoodImageHealth2Clock.add(FoodImageHealth2MaxDuration);
          } else {
              FoodImageHealth2Clock.add(4.000000);
          }
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var WrongKeyHealth2MaxDurationReached;
var WrongKeyHealth2MaxDuration;
var WrongKeyHealth2Components;
function WrongKeyHealth2RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'WrongKeyHealth2' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          WrongKeyHealth2Clock.reset(routineTimer.getTime());
          routineTimer.add(1.000000);
          WrongKeyHealth2MaxDurationReached = false;
          // update component parameters for each repeat
          // Run 'Begin Routine' code from wk_health2_code
          if ((wrongkey === 0)) {
              continueRoutine = false;
          }
          
          psychoJS.experiment.addData('WrongKeyHealth2.started', globalClock.getTime());
          WrongKeyHealth2MaxDuration = null
          // keep track of which components have finished
          WrongKeyHealth2Components = [];
          WrongKeyHealth2Components.push(wrongkeyhealth2);
          
          WrongKeyHealth2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function WrongKeyHealth2RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'WrongKeyHealth2' ---
          // get current time
          t = WrongKeyHealth2Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *wrongkeyhealth2* updates
          if (t >= 0.0 && wrongkeyhealth2.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            wrongkeyhealth2.tStart = t;  // (not accounting for frame time here)
            wrongkeyhealth2.frameNStart = frameN;  // exact frame index
            
            wrongkeyhealth2.setAutoDraw(true);
          }
          
          
          // if wrongkeyhealth2 is active this frame...
          if (wrongkeyhealth2.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (wrongkeyhealth2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            wrongkeyhealth2.tStop = t;  // not accounting for scr refresh
            wrongkeyhealth2.frameNStop = frameN;  // exact frame index
            // update status
            wrongkeyhealth2.status = PsychoJS.Status.FINISHED;
            wrongkeyhealth2.setAutoDraw(false);
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          WrongKeyHealth2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine && routineTimer.getTime() > 0) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function WrongKeyHealth2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'WrongKeyHealth2' ---
          WrongKeyHealth2Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('WrongKeyHealth2.stopped', globalClock.getTime());
          if (routineForceEnded) {
              routineTimer.reset();} else if (WrongKeyHealth2MaxDurationReached) {
              WrongKeyHealth2Clock.add(WrongKeyHealth2MaxDuration);
          } else {
              WrongKeyHealth2Clock.add(1.000000);
          }
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var RemainderImageHealth2MaxDurationReached;
var RemainderImageHealth2MaxDuration;
var RemainderImageHealth2Components;
function RemainderImageHealth2RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'RemainderImageHealth2' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          RemainderImageHealth2Clock.reset();
          routineTimer.reset();
          RemainderImageHealth2MaxDurationReached = false;
          // update component parameters for each repeat
          health_2_remainder.setImage(food);
          psychoJS.experiment.addData('RemainderImageHealth2.started', globalClock.getTime());
          RemainderImageHealth2MaxDuration = null
          // keep track of which components have finished
          RemainderImageHealth2Components = [];
          RemainderImageHealth2Components.push(health_2_remainder);
          
          RemainderImageHealth2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function RemainderImageHealth2RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'RemainderImageHealth2' ---
          // get current time
          t = RemainderImageHealth2Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *health_2_remainder* updates
          if (t >= 0.0 && health_2_remainder.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            health_2_remainder.tStart = t;  // (not accounting for frame time here)
            health_2_remainder.frameNStart = frameN;  // exact frame index
            
            health_2_remainder.setAutoDraw(true);
          }
          
          
          // if health_2_remainder is active this frame...
          if (health_2_remainder.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + remainder - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (health_2_remainder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            health_2_remainder.tStop = t;  // not accounting for scr refresh
            health_2_remainder.frameNStop = frameN;  // exact frame index
            // update status
            health_2_remainder.status = PsychoJS.Status.FINISHED;
            health_2_remainder.setAutoDraw(false);
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          RemainderImageHealth2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function RemainderImageHealth2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'RemainderImageHealth2' ---
          RemainderImageHealth2Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('RemainderImageHealth2.stopped', globalClock.getTime());
          // the Routine "RemainderImageHealth2" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var TooLateHealth2MaxDurationReached;
var TooLateHealth2MaxDuration;
var TooLateHealth2Components;
function TooLateHealth2RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'TooLateHealth2' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          TooLateHealth2Clock.reset(routineTimer.getTime());
          routineTimer.add(1.000000);
          TooLateHealth2MaxDurationReached = false;
          // update component parameters for each repeat
          // Run 'Begin Routine' code from health_2_toolate_code
          if ((responded === 1)) {
              continueRoutine = false;
          }
          
          psychoJS.experiment.addData('TooLateHealth2.started', globalClock.getTime());
          TooLateHealth2MaxDuration = null
          // keep track of which components have finished
          TooLateHealth2Components = [];
          TooLateHealth2Components.push(health_2_tooLate_text);
          
          TooLateHealth2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function TooLateHealth2RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'TooLateHealth2' ---
          // get current time
          t = TooLateHealth2Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *health_2_tooLate_text* updates
          if (t >= 0.0 && health_2_tooLate_text.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            health_2_tooLate_text.tStart = t;  // (not accounting for frame time here)
            health_2_tooLate_text.frameNStart = frameN;  // exact frame index
            
            health_2_tooLate_text.setAutoDraw(true);
          }
          
          
          // if health_2_tooLate_text is active this frame...
          if (health_2_tooLate_text.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (health_2_tooLate_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            health_2_tooLate_text.tStop = t;  // not accounting for scr refresh
            health_2_tooLate_text.frameNStop = frameN;  // exact frame index
            // update status
            health_2_tooLate_text.status = PsychoJS.Status.FINISHED;
            health_2_tooLate_text.setAutoDraw(false);
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          TooLateHealth2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine && routineTimer.getTime() > 0) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function TooLateHealth2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'TooLateHealth2' ---
          TooLateHealth2Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('TooLateHealth2.stopped', globalClock.getTime());
          if (routineForceEnded) {
              routineTimer.reset();} else if (TooLateHealth2MaxDurationReached) {
              TooLateHealth2Clock.add(TooLateHealth2MaxDuration);
          } else {
              TooLateHealth2Clock.add(1.000000);
          }
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var EndOfBlock_health_2MaxDurationReached;
var _health_2_endblock_resp_allKeys;
var EndOfBlock_health_2MaxDuration;
var EndOfBlock_health_2Components;
function EndOfBlock_health_2RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'EndOfBlock_health_2' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          EndOfBlock_health_2Clock.reset();
          routineTimer.reset();
          EndOfBlock_health_2MaxDurationReached = false;
          // update component parameters for each repeat
          health_2_endblock_resp.keys = undefined;
          health_2_endblock_resp.rt = undefined;
          _health_2_endblock_resp_allKeys = [];
          // Run 'Begin Routine' code from health_2_endblock_code
          if ((health_second === 0)) {
              continueRoutine = false;
          }
          
          psychoJS.experiment.addData('EndOfBlock_health_2.started', globalClock.getTime());
          EndOfBlock_health_2MaxDuration = null
          // keep track of which components have finished
          EndOfBlock_health_2Components = [];
          EndOfBlock_health_2Components.push(health_2_endblock_text);
          EndOfBlock_health_2Components.push(health_2_endblock_resp);
          
          EndOfBlock_health_2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function EndOfBlock_health_2RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'EndOfBlock_health_2' ---
          // get current time
          t = EndOfBlock_health_2Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *health_2_endblock_text* updates
          if (t >= 0.0 && health_2_endblock_text.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            health_2_endblock_text.tStart = t;  // (not accounting for frame time here)
            health_2_endblock_text.frameNStart = frameN;  // exact frame index
            
            health_2_endblock_text.setAutoDraw(true);
          }
          
          
          // if health_2_endblock_text is active this frame...
          if (health_2_endblock_text.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *health_2_endblock_resp* updates
          if (t >= 0.0 && health_2_endblock_resp.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            health_2_endblock_resp.tStart = t;  // (not accounting for frame time here)
            health_2_endblock_resp.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { health_2_endblock_resp.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { health_2_endblock_resp.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { health_2_endblock_resp.clearEvents(); });
          }
          
          // if health_2_endblock_resp is active this frame...
          if (health_2_endblock_resp.status === PsychoJS.Status.STARTED) {
            let theseKeys = health_2_endblock_resp.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _health_2_endblock_resp_allKeys = _health_2_endblock_resp_allKeys.concat(theseKeys);
            if (_health_2_endblock_resp_allKeys.length > 0) {
              health_2_endblock_resp.keys = _health_2_endblock_resp_allKeys[_health_2_endblock_resp_allKeys.length - 1].name;  // just the last key pressed
              health_2_endblock_resp.rt = _health_2_endblock_resp_allKeys[_health_2_endblock_resp_allKeys.length - 1].rt;
              health_2_endblock_resp.duration = _health_2_endblock_resp_allKeys[_health_2_endblock_resp_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          EndOfBlock_health_2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function EndOfBlock_health_2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'EndOfBlock_health_2' ---
          EndOfBlock_health_2Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('EndOfBlock_health_2.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(health_2_endblock_resp.corr, level);
          }
          psychoJS.experiment.addData('health_2_endblock_resp.keys', health_2_endblock_resp.keys);
          if (typeof health_2_endblock_resp.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('health_2_endblock_resp.rt', health_2_endblock_resp.rt);
              psychoJS.experiment.addData('health_2_endblock_resp.duration', health_2_endblock_resp.duration);
              routineTimer.reset();
              }
          
          health_2_endblock_resp.stop();
          // the Routine "EndOfBlock_health_2" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var GetReferenceFoodMaxDurationReached;
var GetReferenceFoodMaxDuration;
var GetReferenceFoodComponents;
function GetReferenceFoodRoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'GetReferenceFood' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          GetReferenceFoodClock.reset();
          routineTimer.reset();
          GetReferenceFoodMaxDurationReached = false;
          // update component parameters for each repeat
          // Run 'Begin Routine' code from get_ref_food_code
          if ((found_ref_food === 0)) {
              for (var i, _pj_c = 0, _pj_a = util.range(food_items.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                  i = _pj_a[_pj_c];
                  food_item = food_items[i];
                  if (((health_ratings[food_item] === 3) & (taste_ratings[food_item] === 3))) {
                      found_ref_food = 1;
                      ref_food = food_item;
                      break;
                  }
              }
          }
          if ((found_ref_food === 0)) {
              for (var i, _pj_c = 0, _pj_a = util.range(food_items.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                  i = _pj_a[_pj_c];
                  food_item = food_items[i];
                  if (((health_ratings[food_item] === 4) & (taste_ratings[food_item] === 3))) {
                      found_ref_food = 1;
                      ref_food = food_item;
                      break;
                  }
                  if (((health_ratings[food_item] === 3) & (taste_ratings[food_item] === 4))) {
                      found_ref_food = 1;
                      ref_food = food_item;
                      break;
                  }
              }
          }
          if ((found_ref_food === 0)) {
              for (var i, _pj_c = 0, _pj_a = util.range(food_items.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                  i = _pj_a[_pj_c];
                  food_item = food_items[i];
                  if (((health_ratings[food_item] === 2) & (taste_ratings[food_item] === 3))) {
                      found_ref_food = 1;
                      ref_food = food_item;
                      break;
                  }
                  if (((health_ratings[food_item] === 3) & (taste_ratings[food_item] === 2))) {
                      found_ref_food = 1;
                      ref_food = food_item;
                      break;
                  }
              }
          }
          psychoJS.experiment.addData("ref_food", ref_food);
          
          psychoJS.experiment.addData('GetReferenceFood.started', globalClock.getTime());
          GetReferenceFoodMaxDuration = null
          // keep track of which components have finished
          GetReferenceFoodComponents = [];
          
          GetReferenceFoodComponents.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function GetReferenceFoodRoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'GetReferenceFood' ---
          // get current time
          t = GetReferenceFoodClock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          GetReferenceFoodComponents.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function GetReferenceFoodRoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'GetReferenceFood' ---
          GetReferenceFoodComponents.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('GetReferenceFood.stopped', globalClock.getTime());
          // the Routine "GetReferenceFood" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var ChoiceInstruction1MaxDurationReached;
var _ref_resp_allKeys;
var ChoiceInstruction1MaxDuration;
var ChoiceInstruction1Components;
function ChoiceInstruction1RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'ChoiceInstruction1' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          ChoiceInstruction1Clock.reset();
          routineTimer.reset();
          ChoiceInstruction1MaxDurationReached = false;
          // update component parameters for each repeat
          ref_image_instruction1.setImage((("stimuli/" + ref_food) + ".jpg"));
          ref_resp.keys = undefined;
          ref_resp.rt = undefined;
          _ref_resp_allKeys = [];
          // Run 'Begin Routine' code from choice_inst1_code
          if ((run_choice === 0)) {
              continueRoutine = false;
          }
          
          psychoJS.experiment.addData('ChoiceInstruction1.started', globalClock.getTime());
          ChoiceInstruction1MaxDuration = null
          // keep track of which components have finished
          ChoiceInstruction1Components = [];
          ChoiceInstruction1Components.push(ref_image_instruction1);
          ChoiceInstruction1Components.push(ref_text_instruction1);
          ChoiceInstruction1Components.push(ref_resp);
          
          ChoiceInstruction1Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function ChoiceInstruction1RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'ChoiceInstruction1' ---
          // get current time
          t = ChoiceInstruction1Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *ref_image_instruction1* updates
          if (t >= 0.0 && ref_image_instruction1.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            ref_image_instruction1.tStart = t;  // (not accounting for frame time here)
            ref_image_instruction1.frameNStart = frameN;  // exact frame index
            
            ref_image_instruction1.setAutoDraw(true);
          }
          
          
          // if ref_image_instruction1 is active this frame...
          if (ref_image_instruction1.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *ref_text_instruction1* updates
          if (t >= 0.0 && ref_text_instruction1.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            ref_text_instruction1.tStart = t;  // (not accounting for frame time here)
            ref_text_instruction1.frameNStart = frameN;  // exact frame index
            
            ref_text_instruction1.setAutoDraw(true);
          }
          
          
          // if ref_text_instruction1 is active this frame...
          if (ref_text_instruction1.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *ref_resp* updates
          if (t >= 0.0 && ref_resp.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            ref_resp.tStart = t;  // (not accounting for frame time here)
            ref_resp.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { ref_resp.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { ref_resp.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { ref_resp.clearEvents(); });
          }
          
          // if ref_resp is active this frame...
          if (ref_resp.status === PsychoJS.Status.STARTED) {
            let theseKeys = ref_resp.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _ref_resp_allKeys = _ref_resp_allKeys.concat(theseKeys);
            if (_ref_resp_allKeys.length > 0) {
              ref_resp.keys = _ref_resp_allKeys[_ref_resp_allKeys.length - 1].name;  // just the last key pressed
              ref_resp.rt = _ref_resp_allKeys[_ref_resp_allKeys.length - 1].rt;
              ref_resp.duration = _ref_resp_allKeys[_ref_resp_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          ChoiceInstruction1Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function ChoiceInstruction1RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'ChoiceInstruction1' ---
          ChoiceInstruction1Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('ChoiceInstruction1.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(ref_resp.corr, level);
          }
          psychoJS.experiment.addData('ref_resp.keys', ref_resp.keys);
          if (typeof ref_resp.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('ref_resp.rt', ref_resp.rt);
              psychoJS.experiment.addData('ref_resp.duration', ref_resp.duration);
              routineTimer.reset();
              }
          
          ref_resp.stop();
          // the Routine "ChoiceInstruction1" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var ChoiceInstruction2MaxDurationReached;
var _choice_instruction2_resp_allKeys;
var ChoiceInstruction2MaxDuration;
var ChoiceInstruction2Components;
function ChoiceInstruction2RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'ChoiceInstruction2' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          ChoiceInstruction2Clock.reset();
          routineTimer.reset();
          ChoiceInstruction2MaxDurationReached = false;
          // update component parameters for each repeat
          choice_instruction2_resp.keys = undefined;
          choice_instruction2_resp.rt = undefined;
          _choice_instruction2_resp_allKeys = [];
          // Run 'Begin Routine' code from choice_inst2_code
          if ((run_choice === 0)) {
              continueRoutine = false;
          }
          
          psychoJS.experiment.addData('ChoiceInstruction2.started', globalClock.getTime());
          ChoiceInstruction2MaxDuration = null
          // keep track of which components have finished
          ChoiceInstruction2Components = [];
          ChoiceInstruction2Components.push(choice_instruction2_text);
          ChoiceInstruction2Components.push(c_rating);
          ChoiceInstruction2Components.push(blueberry);
          ChoiceInstruction2Components.push(raspberry);
          ChoiceInstruction2Components.push(choice_instruction2_resp);
          
          ChoiceInstruction2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function ChoiceInstruction2RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'ChoiceInstruction2' ---
          // get current time
          t = ChoiceInstruction2Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *choice_instruction2_text* updates
          if (t >= 0.0 && choice_instruction2_text.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            choice_instruction2_text.tStart = t;  // (not accounting for frame time here)
            choice_instruction2_text.frameNStart = frameN;  // exact frame index
            
            choice_instruction2_text.setAutoDraw(true);
          }
          
          
          // if choice_instruction2_text is active this frame...
          if (choice_instruction2_text.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *c_rating* updates
          if (t >= 0.0 && c_rating.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            c_rating.tStart = t;  // (not accounting for frame time here)
            c_rating.frameNStart = frameN;  // exact frame index
            
            c_rating.setAutoDraw(true);
          }
          
          
          // if c_rating is active this frame...
          if (c_rating.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *blueberry* updates
          if (t >= 0.0 && blueberry.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            blueberry.tStart = t;  // (not accounting for frame time here)
            blueberry.frameNStart = frameN;  // exact frame index
            
            blueberry.setAutoDraw(true);
          }
          
          
          // if blueberry is active this frame...
          if (blueberry.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *raspberry* updates
          if (t >= 0.0 && raspberry.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            raspberry.tStart = t;  // (not accounting for frame time here)
            raspberry.frameNStart = frameN;  // exact frame index
            
            raspberry.setAutoDraw(true);
          }
          
          
          // if raspberry is active this frame...
          if (raspberry.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *choice_instruction2_resp* updates
          if (t >= 0.0 && choice_instruction2_resp.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            choice_instruction2_resp.tStart = t;  // (not accounting for frame time here)
            choice_instruction2_resp.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { choice_instruction2_resp.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { choice_instruction2_resp.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { choice_instruction2_resp.clearEvents(); });
          }
          
          // if choice_instruction2_resp is active this frame...
          if (choice_instruction2_resp.status === PsychoJS.Status.STARTED) {
            let theseKeys = choice_instruction2_resp.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _choice_instruction2_resp_allKeys = _choice_instruction2_resp_allKeys.concat(theseKeys);
            if (_choice_instruction2_resp_allKeys.length > 0) {
              choice_instruction2_resp.keys = _choice_instruction2_resp_allKeys[_choice_instruction2_resp_allKeys.length - 1].name;  // just the last key pressed
              choice_instruction2_resp.rt = _choice_instruction2_resp_allKeys[_choice_instruction2_resp_allKeys.length - 1].rt;
              choice_instruction2_resp.duration = _choice_instruction2_resp_allKeys[_choice_instruction2_resp_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          ChoiceInstruction2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function ChoiceInstruction2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'ChoiceInstruction2' ---
          ChoiceInstruction2Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('ChoiceInstruction2.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(choice_instruction2_resp.corr, level);
          }
          psychoJS.experiment.addData('choice_instruction2_resp.keys', choice_instruction2_resp.keys);
          if (typeof choice_instruction2_resp.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('choice_instruction2_resp.rt', choice_instruction2_resp.rt);
              psychoJS.experiment.addData('choice_instruction2_resp.duration', choice_instruction2_resp.duration);
              routineTimer.reset();
              }
          
          choice_instruction2_resp.stop();
          // the Routine "ChoiceInstruction2" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var ChoiceInstruction3MaxDurationReached;
var _choice_instruction3_resp_allKeys;
var ChoiceInstruction3MaxDuration;
var ChoiceInstruction3Components;
function ChoiceInstruction3RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'ChoiceInstruction3' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          ChoiceInstruction3Clock.reset();
          routineTimer.reset();
          ChoiceInstruction3MaxDurationReached = false;
          // update component parameters for each repeat
          choice_instruction3_resp.keys = undefined;
          choice_instruction3_resp.rt = undefined;
          _choice_instruction3_resp_allKeys = [];
          // Run 'Begin Routine' code from choice_inst3_code
          if ((run_choice === 0)) {
              continueRoutine = false;
          }
          
          psychoJS.experiment.addData('ChoiceInstruction3.started', globalClock.getTime());
          ChoiceInstruction3MaxDuration = null
          // keep track of which components have finished
          ChoiceInstruction3Components = [];
          ChoiceInstruction3Components.push(choice_instruction3_resp);
          ChoiceInstruction3Components.push(choice_instruction3_text);
          
          ChoiceInstruction3Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function ChoiceInstruction3RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'ChoiceInstruction3' ---
          // get current time
          t = ChoiceInstruction3Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *choice_instruction3_resp* updates
          if (t >= 0.0 && choice_instruction3_resp.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            choice_instruction3_resp.tStart = t;  // (not accounting for frame time here)
            choice_instruction3_resp.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { choice_instruction3_resp.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { choice_instruction3_resp.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { choice_instruction3_resp.clearEvents(); });
          }
          
          // if choice_instruction3_resp is active this frame...
          if (choice_instruction3_resp.status === PsychoJS.Status.STARTED) {
            let theseKeys = choice_instruction3_resp.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _choice_instruction3_resp_allKeys = _choice_instruction3_resp_allKeys.concat(theseKeys);
            if (_choice_instruction3_resp_allKeys.length > 0) {
              choice_instruction3_resp.keys = _choice_instruction3_resp_allKeys[_choice_instruction3_resp_allKeys.length - 1].name;  // just the last key pressed
              choice_instruction3_resp.rt = _choice_instruction3_resp_allKeys[_choice_instruction3_resp_allKeys.length - 1].rt;
              choice_instruction3_resp.duration = _choice_instruction3_resp_allKeys[_choice_instruction3_resp_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          
          // *choice_instruction3_text* updates
          if (t >= 0.0 && choice_instruction3_text.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            choice_instruction3_text.tStart = t;  // (not accounting for frame time here)
            choice_instruction3_text.frameNStart = frameN;  // exact frame index
            
            choice_instruction3_text.setAutoDraw(true);
          }
          
          
          // if choice_instruction3_text is active this frame...
          if (choice_instruction3_text.status === PsychoJS.Status.STARTED) {
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          ChoiceInstruction3Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function ChoiceInstruction3RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'ChoiceInstruction3' ---
          ChoiceInstruction3Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('ChoiceInstruction3.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(choice_instruction3_resp.corr, level);
          }
          psychoJS.experiment.addData('choice_instruction3_resp.keys', choice_instruction3_resp.keys);
          if (typeof choice_instruction3_resp.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('choice_instruction3_resp.rt', choice_instruction3_resp.rt);
              psychoJS.experiment.addData('choice_instruction3_resp.duration', choice_instruction3_resp.duration);
              routineTimer.reset();
              }
          
          choice_instruction3_resp.stop();
          // the Routine "ChoiceInstruction3" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var FixationChoiceMaxDurationReached;
var FixationChoiceMaxDuration;
var FixationChoiceComponents;
function FixationChoiceRoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'FixationChoice' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          FixationChoiceClock.reset();
          routineTimer.reset();
          FixationChoiceMaxDurationReached = false;
          // update component parameters for each repeat
          // Run 'Begin Routine' code from choice_fix_code
          if ((trials_choice.thisN === 0)) {
              trials_start_time_choice = globalClock.getTime();
          }
          fixation_duration = ((trialstart + trials_start_time_choice) - globalClock.getTime());
          psychoJS.experiment.addData("fixation_duration", fixation_duration);
          if ((trials_choice.thisTrial["food_item"] === ref_food)) {
              food_image_display = "stimuli/yellow rice_beans.jpg";
          } else {
              food_image_display = trials_choice.thisTrial["food"];
          }
          psychoJS.experiment.addData("choice_image_displayed", food_image_display);
          
          choice_fixationcross_text.setText('+');
          psychoJS.experiment.addData('FixationChoice.started', globalClock.getTime());
          FixationChoiceMaxDuration = null
          // keep track of which components have finished
          FixationChoiceComponents = [];
          FixationChoiceComponents.push(choice_fixationcross_text);
          
          FixationChoiceComponents.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function FixationChoiceRoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'FixationChoice' ---
          // get current time
          t = FixationChoiceClock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *choice_fixationcross_text* updates
          if (t >= 0.0 && choice_fixationcross_text.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            choice_fixationcross_text.tStart = t;  // (not accounting for frame time here)
            choice_fixationcross_text.frameNStart = frameN;  // exact frame index
            
            choice_fixationcross_text.setAutoDraw(true);
          }
          
          
          // if choice_fixationcross_text is active this frame...
          if (choice_fixationcross_text.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + fixation_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (choice_fixationcross_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            choice_fixationcross_text.tStop = t;  // not accounting for scr refresh
            choice_fixationcross_text.frameNStop = frameN;  // exact frame index
            // update status
            choice_fixationcross_text.status = PsychoJS.Status.FINISHED;
            choice_fixationcross_text.setAutoDraw(false);
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          FixationChoiceComponents.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function FixationChoiceRoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'FixationChoice' ---
          FixationChoiceComponents.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('FixationChoice.stopped', globalClock.getTime());
          // the Routine "FixationChoice" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var FoodImageChoiceMaxDurationReached;
var _key_resp_choice_allKeys;
var FoodImageChoiceMaxDuration;
var FoodImageChoiceComponents;
function FoodImageChoiceRoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'FoodImageChoice' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          FoodImageChoiceClock.reset(routineTimer.getTime());
          routineTimer.add(4.000000);
          FoodImageChoiceMaxDurationReached = false;
          // update component parameters for each repeat
          food_image_choice.setImage(food_image_display);
          key_resp_choice.keys = undefined;
          key_resp_choice.rt = undefined;
          _key_resp_choice_allKeys = [];
          // Run 'Begin Routine' code from choice_image_code
          image_started_time = globalClock.getTime();
          
          reference_food_image.setImage((("stimuli/" + ref_food) + ".jpg"));
          psychoJS.experiment.addData('FoodImageChoice.started', globalClock.getTime());
          FoodImageChoiceMaxDuration = null
          // keep track of which components have finished
          FoodImageChoiceComponents = [];
          FoodImageChoiceComponents.push(food_image_choice);
          FoodImageChoiceComponents.push(rating_choice);
          FoodImageChoiceComponents.push(key_resp_choice);
          FoodImageChoiceComponents.push(reference_food_image);
          
          FoodImageChoiceComponents.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function FoodImageChoiceRoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'FoodImageChoice' ---
          // get current time
          t = FoodImageChoiceClock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *food_image_choice* updates
          if (t >= 0.0 && food_image_choice.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            food_image_choice.tStart = t;  // (not accounting for frame time here)
            food_image_choice.frameNStart = frameN;  // exact frame index
            
            food_image_choice.setAutoDraw(true);
          }
          
          
          // if food_image_choice is active this frame...
          if (food_image_choice.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (food_image_choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            food_image_choice.tStop = t;  // not accounting for scr refresh
            food_image_choice.frameNStop = frameN;  // exact frame index
            // update status
            food_image_choice.status = PsychoJS.Status.FINISHED;
            food_image_choice.setAutoDraw(false);
          }
          
          
          // *rating_choice* updates
          if (t >= 0.0 && rating_choice.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            rating_choice.tStart = t;  // (not accounting for frame time here)
            rating_choice.frameNStart = frameN;  // exact frame index
            
            rating_choice.setAutoDraw(true);
          }
          
          
          // if rating_choice is active this frame...
          if (rating_choice.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (rating_choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            rating_choice.tStop = t;  // not accounting for scr refresh
            rating_choice.frameNStop = frameN;  // exact frame index
            // update status
            rating_choice.status = PsychoJS.Status.FINISHED;
            rating_choice.setAutoDraw(false);
          }
          
          
          // *key_resp_choice* updates
          if (t >= 0.0 && key_resp_choice.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            key_resp_choice.tStart = t;  // (not accounting for frame time here)
            key_resp_choice.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { key_resp_choice.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { key_resp_choice.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { key_resp_choice.clearEvents(); });
          }
          frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (key_resp_choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            key_resp_choice.tStop = t;  // not accounting for scr refresh
            key_resp_choice.frameNStop = frameN;  // exact frame index
            // update status
            key_resp_choice.status = PsychoJS.Status.FINISHED;
            frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (key_resp_choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              key_resp_choice.tStop = t;  // not accounting for scr refresh
              key_resp_choice.frameNStop = frameN;  // exact frame index
              // update status
              key_resp_choice.status = PsychoJS.Status.FINISHED;
              key_resp_choice.status = PsychoJS.Status.FINISHED;
                }
              
            }
            
            // if key_resp_choice is active this frame...
            if (key_resp_choice.status === PsychoJS.Status.STARTED) {
              let theseKeys = key_resp_choice.getKeys({
                keyList: typeof [] === 'string' ? [[]] : [], 
                waitRelease: false
              });
              _key_resp_choice_allKeys = _key_resp_choice_allKeys.concat(theseKeys);
              if (_key_resp_choice_allKeys.length > 0) {
                key_resp_choice.keys = _key_resp_choice_allKeys[_key_resp_choice_allKeys.length - 1].name;  // just the last key pressed
                key_resp_choice.rt = _key_resp_choice_allKeys[_key_resp_choice_allKeys.length - 1].rt;
                key_resp_choice.duration = _key_resp_choice_allKeys[_key_resp_choice_allKeys.length - 1].duration;
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            
            // *reference_food_image* updates
            if (t >= 0.0 && reference_food_image.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              reference_food_image.tStart = t;  // (not accounting for frame time here)
              reference_food_image.frameNStart = frameN;  // exact frame index
              
              reference_food_image.setAutoDraw(true);
            }
            
            
            // if reference_food_image is active this frame...
            if (reference_food_image.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (reference_food_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              reference_food_image.tStop = t;  // not accounting for scr refresh
              reference_food_image.frameNStop = frameN;  // exact frame index
              // update status
              reference_food_image.status = PsychoJS.Status.FINISHED;
              reference_food_image.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            FoodImageChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function FoodImageChoiceRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'FoodImageChoice' ---
            FoodImageChoiceComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('FoodImageChoice.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(key_resp_choice.corr, level);
            }
            psychoJS.experiment.addData('key_resp_choice.keys', key_resp_choice.keys);
            if (typeof key_resp_choice.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('key_resp_choice.rt', key_resp_choice.rt);
                psychoJS.experiment.addData('key_resp_choice.duration', key_resp_choice.duration);
                routineTimer.reset();
                }
            
            key_resp_choice.stop();
            // Run 'End Routine' code from choice_image_code
            image_ended_time = globalClock.getTime();
            remainder = ((4.0 - image_ended_time) + image_started_time);
            responded = 0;
            wrongkey = 0;
            if (key_resp_choice.keys) {
                responded = 1;
                rating_given = key_resp_choice.keys.slice((- 1))[0].toString();
                if ((((((rating_given === "1") || (rating_given === "2")) || (rating_given === "3")) || (rating_given === "4")) || (rating_given === "5"))) {
                    integer_rating = Number.parseInt(rating_given);
                    psychoJS.experiment.addData("choice_rating", integer_rating);
                } else {
                    wrongkey = 1;
                    remainder = 0;
                }
            }
            
            if (routineForceEnded) {
                routineTimer.reset();} else if (FoodImageChoiceMaxDurationReached) {
                FoodImageChoiceClock.add(FoodImageChoiceMaxDuration);
            } else {
                FoodImageChoiceClock.add(4.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var WrongKeyChoiceMaxDurationReached;
var WrongKeyChoiceMaxDuration;
var WrongKeyChoiceComponents;
function WrongKeyChoiceRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'WrongKeyChoice' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            WrongKeyChoiceClock.reset(routineTimer.getTime());
            routineTimer.add(1.000000);
            WrongKeyChoiceMaxDurationReached = false;
            // update component parameters for each repeat
            // Run 'Begin Routine' code from wk_choice_code
            if ((wrongkey === 0)) {
                continueRoutine = false;
            }
            
            psychoJS.experiment.addData('WrongKeyChoice.started', globalClock.getTime());
            WrongKeyChoiceMaxDuration = null
            // keep track of which components have finished
            WrongKeyChoiceComponents = [];
            WrongKeyChoiceComponents.push(wrongkeychoice);
            
            WrongKeyChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function WrongKeyChoiceRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'WrongKeyChoice' ---
            // get current time
            t = WrongKeyChoiceClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *wrongkeychoice* updates
            if (t >= 0.0 && wrongkeychoice.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              wrongkeychoice.tStart = t;  // (not accounting for frame time here)
              wrongkeychoice.frameNStart = frameN;  // exact frame index
              
              wrongkeychoice.setAutoDraw(true);
            }
            
            
            // if wrongkeychoice is active this frame...
            if (wrongkeychoice.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (wrongkeychoice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              wrongkeychoice.tStop = t;  // not accounting for scr refresh
              wrongkeychoice.frameNStop = frameN;  // exact frame index
              // update status
              wrongkeychoice.status = PsychoJS.Status.FINISHED;
              wrongkeychoice.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            WrongKeyChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function WrongKeyChoiceRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'WrongKeyChoice' ---
            WrongKeyChoiceComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('WrongKeyChoice.stopped', globalClock.getTime());
            if (routineForceEnded) {
                routineTimer.reset();} else if (WrongKeyChoiceMaxDurationReached) {
                WrongKeyChoiceClock.add(WrongKeyChoiceMaxDuration);
            } else {
                WrongKeyChoiceClock.add(1.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var RemainderImageChoiceMaxDurationReached;
var RemainderImageChoiceMaxDuration;
var RemainderImageChoiceComponents;
function RemainderImageChoiceRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'RemainderImageChoice' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            RemainderImageChoiceClock.reset();
            routineTimer.reset();
            RemainderImageChoiceMaxDurationReached = false;
            // update component parameters for each repeat
            food_image_choice_remainder.setImage(food_image_display);
            reference_food_image_remainder.setImage((("stimuli/" + ref_food) + ".jpg"));
            psychoJS.experiment.addData('RemainderImageChoice.started', globalClock.getTime());
            RemainderImageChoiceMaxDuration = null
            // keep track of which components have finished
            RemainderImageChoiceComponents = [];
            RemainderImageChoiceComponents.push(food_image_choice_remainder);
            RemainderImageChoiceComponents.push(reference_food_image_remainder);
            
            RemainderImageChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function RemainderImageChoiceRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'RemainderImageChoice' ---
            // get current time
            t = RemainderImageChoiceClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *food_image_choice_remainder* updates
            if (t >= 0.0 && food_image_choice_remainder.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              food_image_choice_remainder.tStart = t;  // (not accounting for frame time here)
              food_image_choice_remainder.frameNStart = frameN;  // exact frame index
              
              food_image_choice_remainder.setAutoDraw(true);
            }
            
            
            // if food_image_choice_remainder is active this frame...
            if (food_image_choice_remainder.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + remainder - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (food_image_choice_remainder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              food_image_choice_remainder.tStop = t;  // not accounting for scr refresh
              food_image_choice_remainder.frameNStop = frameN;  // exact frame index
              // update status
              food_image_choice_remainder.status = PsychoJS.Status.FINISHED;
              food_image_choice_remainder.setAutoDraw(false);
            }
            
            
            // *reference_food_image_remainder* updates
            if (t >= 0.0 && reference_food_image_remainder.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              reference_food_image_remainder.tStart = t;  // (not accounting for frame time here)
              reference_food_image_remainder.frameNStart = frameN;  // exact frame index
              
              reference_food_image_remainder.setAutoDraw(true);
            }
            
            
            // if reference_food_image_remainder is active this frame...
            if (reference_food_image_remainder.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + remainder - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (reference_food_image_remainder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              reference_food_image_remainder.tStop = t;  // not accounting for scr refresh
              reference_food_image_remainder.frameNStop = frameN;  // exact frame index
              // update status
              reference_food_image_remainder.status = PsychoJS.Status.FINISHED;
              reference_food_image_remainder.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            RemainderImageChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function RemainderImageChoiceRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'RemainderImageChoice' ---
            RemainderImageChoiceComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('RemainderImageChoice.stopped', globalClock.getTime());
            // the Routine "RemainderImageChoice" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset();
            
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var TooLateChoiceMaxDurationReached;
var TooLateChoiceMaxDuration;
var TooLateChoiceComponents;
function TooLateChoiceRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'TooLateChoice' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            TooLateChoiceClock.reset(routineTimer.getTime());
            routineTimer.add(1.000000);
            TooLateChoiceMaxDurationReached = false;
            // update component parameters for each repeat
            // Run 'Begin Routine' code from choice_toolate_code
            if ((responded === 1)) {
                continueRoutine = false;
            }
            
            psychoJS.experiment.addData('TooLateChoice.started', globalClock.getTime());
            TooLateChoiceMaxDuration = null
            // keep track of which components have finished
            TooLateChoiceComponents = [];
            TooLateChoiceComponents.push(choice_tooLate_text);
            
            TooLateChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function TooLateChoiceRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'TooLateChoice' ---
            // get current time
            t = TooLateChoiceClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *choice_tooLate_text* updates
            if (t >= 0.0 && choice_tooLate_text.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              choice_tooLate_text.tStart = t;  // (not accounting for frame time here)
              choice_tooLate_text.frameNStart = frameN;  // exact frame index
              
              choice_tooLate_text.setAutoDraw(true);
            }
            
            
            // if choice_tooLate_text is active this frame...
            if (choice_tooLate_text.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (choice_tooLate_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              choice_tooLate_text.tStop = t;  // not accounting for scr refresh
              choice_tooLate_text.frameNStop = frameN;  // exact frame index
              // update status
              choice_tooLate_text.status = PsychoJS.Status.FINISHED;
              choice_tooLate_text.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            TooLateChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function TooLateChoiceRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'TooLateChoice' ---
            TooLateChoiceComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('TooLateChoice.stopped', globalClock.getTime());
            if (routineForceEnded) {
                routineTimer.reset();} else if (TooLateChoiceMaxDurationReached) {
                TooLateChoiceClock.add(TooLateChoiceMaxDuration);
            } else {
                TooLateChoiceClock.add(1.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var EndOfBlock_ChoiceMaxDurationReached;
var _choice_endblock_resp_allKeys;
var EndOfBlock_ChoiceMaxDuration;
var EndOfBlock_ChoiceComponents;
function EndOfBlock_ChoiceRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'EndOfBlock_Choice' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            EndOfBlock_ChoiceClock.reset();
            routineTimer.reset();
            EndOfBlock_ChoiceMaxDurationReached = false;
            // update component parameters for each repeat
            choice_endblock_resp.keys = undefined;
            choice_endblock_resp.rt = undefined;
            _choice_endblock_resp_allKeys = [];
            psychoJS.experiment.addData('EndOfBlock_Choice.started', globalClock.getTime());
            EndOfBlock_ChoiceMaxDuration = null
            // keep track of which components have finished
            EndOfBlock_ChoiceComponents = [];
            EndOfBlock_ChoiceComponents.push(choice_endblock_text);
            EndOfBlock_ChoiceComponents.push(choice_endblock_resp);
            
            EndOfBlock_ChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function EndOfBlock_ChoiceRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'EndOfBlock_Choice' ---
            // get current time
            t = EndOfBlock_ChoiceClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *choice_endblock_text* updates
            if (t >= 0.0 && choice_endblock_text.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              choice_endblock_text.tStart = t;  // (not accounting for frame time here)
              choice_endblock_text.frameNStart = frameN;  // exact frame index
              
              choice_endblock_text.setAutoDraw(true);
            }
            
            
            // if choice_endblock_text is active this frame...
            if (choice_endblock_text.status === PsychoJS.Status.STARTED) {
            }
            
            
            // *choice_endblock_resp* updates
            if (t >= 0.0 && choice_endblock_resp.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              choice_endblock_resp.tStart = t;  // (not accounting for frame time here)
              choice_endblock_resp.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { choice_endblock_resp.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { choice_endblock_resp.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { choice_endblock_resp.clearEvents(); });
            }
            
            // if choice_endblock_resp is active this frame...
            if (choice_endblock_resp.status === PsychoJS.Status.STARTED) {
              let theseKeys = choice_endblock_resp.getKeys({
                keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                waitRelease: false
              });
              _choice_endblock_resp_allKeys = _choice_endblock_resp_allKeys.concat(theseKeys);
              if (_choice_endblock_resp_allKeys.length > 0) {
                choice_endblock_resp.keys = _choice_endblock_resp_allKeys[_choice_endblock_resp_allKeys.length - 1].name;  // just the last key pressed
                choice_endblock_resp.rt = _choice_endblock_resp_allKeys[_choice_endblock_resp_allKeys.length - 1].rt;
                choice_endblock_resp.duration = _choice_endblock_resp_allKeys[_choice_endblock_resp_allKeys.length - 1].duration;
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            EndOfBlock_ChoiceComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function EndOfBlock_ChoiceRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'EndOfBlock_Choice' ---
            EndOfBlock_ChoiceComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('EndOfBlock_Choice.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(choice_endblock_resp.corr, level);
            }
            psychoJS.experiment.addData('choice_endblock_resp.keys', choice_endblock_resp.keys);
            if (typeof choice_endblock_resp.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('choice_endblock_resp.rt', choice_endblock_resp.rt);
                psychoJS.experiment.addData('choice_endblock_resp.duration', choice_endblock_resp.duration);
                routineTimer.reset();
                }
            
            choice_endblock_resp.stop();
            // the Routine "EndOfBlock_Choice" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset();
            
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
function importConditions(currentLoop) {
          return async function () {
            psychoJS.importAttributes(currentLoop.getCurrentTrial());
            return Scheduler.Event.NEXT;
            };
        }
        
        
async function quitPsychoJS(message, isCompleted) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry();
          }
          psychoJS.window.close();
          psychoJS.quit({message: message, isCompleted: isCompleted});
          
          return Scheduler.Event.QUIT;
        }
