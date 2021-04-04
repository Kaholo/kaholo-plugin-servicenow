# kaholo-plugin-servicenow
ServiceNow plugin for kaholo.

## Settings
1. URL (String) **Optional** - The URL of your default ServiceNow endpoint.
2. User (String) **Optional** - The user name of your default user.
3. Password (Vault) **Optional** - The password of your default user.

## Methods

### Method: Create Incident

Create a new incident for the provided user.

### Parameters
1. URL (String) **Optional** - The URL of the ServiceNow endpoint to create this incident on.
2. Incident info (String/Object) **Required**  - All info on new incident. Can be passed either as string or as any kind of object from code.
3. User (String) **Optional** - The user name of the user to create the new incident.
4. Password (Vault) **Optional** - The password of the user to create the new incident.

* Please Notice! URL, User, and Password argumants, must be passed either in settings or in action parameters.