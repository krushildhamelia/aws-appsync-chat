Problems
```
nodejs12.x is the latest to be used with the AWS lambdas for deployment

        : : : Replace nodejs Runtime: nodejs12.x in auth-cloudformation-template.yml
```
```
Failed to compile.

./src/components/Conversations.js
Attempted import error: 'compose' is not exported from 'react-apollo'.

        : : : compose was removed from React Apollo 3 (see the Breaking Changes section of the Changelog). If you want to keep using compose though, it was just a copy of lodash's flowRight.

        ::: npm install lodash.flowright
        ::: import * as compose from 'lodash.flowright';

```

```
./src/index.js
Module not found: Can't resolve 'aws-appsync-react' in 'C:\PersonalProjects\aws-appsync-chat\src'
        :::npm install aws-appsync-react
```

```
Unhandled Rejection (TypeError): Cannot read property 'hydrated' of undefined

        ::: Created a hydrated.js as per the issue https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/448
        ::: And made the changes in the index.js file to support the Loading and App components based on the Hydration online offline states...
```

```
AWS Lambda deploy answer as Y ::: when ampilfy init
```