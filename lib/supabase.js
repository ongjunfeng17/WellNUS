import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from '@react-native-async-storage/async-storage'

const projectUrl = process.env.SUPABASE_PROJECT_URL
const projectKey = process.env.SUPABASE_PROJECT_KEY

export const supabase = createClient(projectUrl, projectKey, {
    auth: {
        storage: AsyncStorage,
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 720386fd9cd3e896d7c32b3a5a043d6742f79cc9
