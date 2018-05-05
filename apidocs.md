# Api documentation
## About 
- The following documents the available end points for the agrigeohub project. The models has being classed accordly see below for description
## Entity Defination 
   * __Farmer_Profile__ All farmers have a profile and an endpoint exists for creating this profile. Farmers create farms which in turn have crops on them, farmers also belong to a coorporative 
   * __Agent_Profile__ There are agents on the platform and endpoint also exists for creating agents. Agents access to crops
   * __Cooperative__ Coopoerative provide access to various resource for farmers and farm lands end points exist for creating a corpoerative 
   * __Farms__ Farms are owned by farmers, and farm can contain many crops 
   * __Crops__ Crops refer to a particular entity on a farm it has its attribute and end points exist for getting multiple attributes of crops 


## Models  (Database Tables ) 

### Farmer Profile
| ----------------------------
| Column | Data type | Doc
| ----------------------------
| uuid| uuid | Unique Identifier 
|---------------------------------
| home_address | text | The home address of the farmer 
|------------------------------------------------------
| state | text | The state  of the farmer 
|----------------------------------------------------------------------------
| lga  | text | The lga of the farmer 
|------------------------------------------------------------------------------
| farmland | <`farmland`> |The famland it has a  one to many relationship  with `famland entity `
|------------------------------------------------------------------------------------------------
| Cooperative  | <`coorperative`>|  The coorporatives the famer belongs to
|-------------------------------------------------------------------------------------------
| work_address | text | The work address of the farmer 
|------------------------------------------------------
| occupation | text | The home occupation of the farmer 
|------------------------------------------------------
| farmer | <`user`> | The auth  info of the farmer 
|------------------------------------------------------

### Agent Profile
| ----------------------------
| Column | Data type | Doc
| ----------------------------
| uuid| uuid | Unique Identifier 
|---------------------------------
| home_address | text | The home address of the agent
|------------------------------------------------------
| state | text | The state  of the agent  
|----------------------------------------------------------------------------
| lga  | text | The lga of the agent  
|------------------------------------------------------------------------------
| crop | <`crop`> |The crop it has a  one to many relationship  with `crop entity `
|------------------------------------------------------------------------------------------------
| work_address | text | The work address of the agent 
|------------------------------------------------------
| occupation | text | The home occupation of the agent
|------------------------------------------------------
| agent | <`user`> | The auth  info of the agent 
|------------------------------------------------------

### Cooproative
| ----------------------------
| Column | Data type | Doc
| ----------------------------
| uuid| uuid | Unique Identifier 
|---------------------------------
| name | text | Name of cooperative 
|------------------------------------------------------
| state | text | The state  of the cooporative 
|----------------------------------------------------------------------------
| lga  | text | The lga of the corporative 
|------------------------------------------------------------------------------
| about | text | About the corporative 
|------------------------------------------------------

### Farm
| ----------------------------
| Column | Data type | Doc
| ----------------------------
| uuid| uuid | Unique Identifier 
|---------------------------------
| size  | integer | The size of the farm 
|------------------------------------------------------
| state | text | The state host of the farm  
|----------------------------------------------------------------------------
| lga  | text | The lga host of the farm  
|------------------------------------------------------------------------------
| ward   | text | The ward host of the farm  
|------------------------------------------------------------------------------
| crops | <`crop`> |The crop it has a  one to many relationship  with `crop entity `
|------------------------------------------------------------------------------------------------
| longitude | double  | longitude
|------------------------------------------------------
|  latitude | double | latitude
|------------------------------------------------------
| fallow | boolean | True id farm is fallow 
|------------------------------------------------------
| is_mechanized | boolean | True if farm is mechanized
|------------------------------------------------------

### Crop
| ----------------------------
| Column | Data type | Doc
|------------------------------------------------------
| uuid| uuid | Unique Identifier 
| croptype | text | The type of the crop  
|---------------------------------------------------------------------------------------------
| expected_yield_weight  | integer | The expected yeild weight if `is_harvested` is false
|--------------------------------------------------------------------------------------------
| yield_weight  | integer | The expected yeild weight if `is_harvested` is true
|--------------------------------------------------------------------------------------------
| date_planted  | Date | The Date planted 
|--------------------------------------------------------------------------------------------
| expected_yield_date  | Date | The expected yield date   
|------------------------------------------------------------------------------
| is_harvested | boolean | true if crop is harvested 
|------------------------------------------------------------------------------------------------
| is_currently_cultivated | boolean   | true if crop is under cultivation
|--------------------------------------------------------------------------------------------------
|  requires_fertilizer| boolean | 
|---------------------------------------------------------------------------------------------------
| frequires_pesticide | boolean | 
|---------------------------------------------------------------------------------------------------

   url(r'^api/create/crop/$', crops_Collection.as_view()),
    url(r'^api/create/farm/$', farm_Collection.as_view()),
    url(r'^api/create/coorporative/$', coorperative_Collection.as_view()),
    url(r'^api/create/farmer/$', farmer_profile_Collection.as_view()),   
    url(r'^api/create/agent/$', agent_profile_Collection.as_view()),
# Api definition 
Find detailed desciption about api compontents
## Base api is defined as 
All end point must be prefixed with this url 
` https://www.keki.herokuapp/`

### Farmer Profile 
- __Create a farmer profile instance__
   * __POST__ `/api/create/farmer/` 
- __Edit a farmer profile instance__
   * __PATCH__ `/api/edit/farmer/` 
- __Get a farmer profile instance__
   * __GET__ `/api/find/farmer/<uuid>/` 
- __Get all farmer profiles on the platform__
   * __GET__ `/api/all/farmers/` 

### Farm 
- __Create a farm instance__
   * __POST__ `/api/create/farm/` 
- __Edit a farm instance__
   * __PATCH__ `/api/edit/farm/` 
- __Get a farm instance__
   * __GET__ `/api/find/farm/<uuid>/` 
- __Get all farm on the platform__
   * __GET__ `/api/all/farms/` 

### Agent Profile 
- __Create an Agent  profile instance__
   * __POST__ `/api/create/agent/` 
- __Edit an Agent profile instance__
   * __PATCH__ `/api/edit/agent/` 
- __Get an Agent  profile instance__
   * __GET__ `/api/find/agent/<uuid>/` 
- __Get all Agent profiles on the platform__
   * __GET__ `/api/all/agents/` 

### Coorporative 
- __Create a Coorporative instance__
   * __POST__ `/api/create/coorporative/` 
- __Edit a Coorporative instance__
   * __PATCH__ `/api/edit/coorporative/` 
- __Get a Coorporative instance__
   * __GET__ `/api/find/coorporative/<uuid>/` 
- __Get all Coorporatives on the platform__
   * __GET__ `/api/all/coorporative/` 

### Crop 
- __Create a crop instance__
   * __POST__ `/api/create/crop/` 
- __Edit a crop instance__
   * __PATCH__ `/api/edit/crop/` 
- __Get a crop instance__
   * __GET__ `/api/find/crop/<uuid>/` 
- __Get all crop on the platform__
   * __GET__ `/api/all/crop` 

## Docs on initial thoughts on some api usability

### Acess some analytical data for farm specific functions via the following endpoints 
-  __secondary url __ `api/info/farm/`

in other to get access to the predefined analytical data set please send a get request and use any of the following param in a get request
- __crop_type__ : Use this to find a specific cropt type eg maize
- __location__ : Depending on region classification the location is the name given to a place such as `Abuja`, `Wuse`, `ward2`
- __region_class__ : This is the classification of a region into `ward`, `lga`, `state` it is required for some and not all requests
- __farmers_land__ : pass in the `region_class`, `location` and this attribute to get farmers in a place
- __famrers_crop__ : Find a farmer by passing the auth `uuid` and then find all the crops belonging to that farmer 
- __farmers_type_crop__ : Pass in the `crop_type  attribute and this attribute to find all farms that cultivates a particular crop type 
- __farm_size_gte__ : Get all farm sixe greater than a specified integer 
- __farm_size_lte__ : Get all farm sixe less than a specified integer
- __farmlandinLocation__ : Get all farms in a location pass in the `location` atttribute and the `region_class` attribute
- __agentsinLocation__ : Get all agents in a location pass in the `location` atttribute and the `region_class` attribute
### Acess some analytical data for farm specific functions via the following endpoints 
-  __secondary url __ `api/info/crops/`