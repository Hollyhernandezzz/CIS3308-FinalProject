# CIS3308-FinalProject
```bash
#backend setup
git clone example_ssh
cd example_repo
git switch -c feature_branch
npm create vite@latest . --save-dev
npm install
npm i @supabase/supabase-js
brew install supabase/tap/supabase #npx i supabase --save-dev
supabase init #npx supabase init
supabase login #npx supabase login
supabase link --project-ref example_ref #npx supabase link --project-ref example_ref
git add .
git commit -m "first commit"
git push -u origin feature_branch

#every new migration
git switch main
git pull
git switch feature_branch
git merge main
supabase migration new m1 #npx supabase migration new example_migration
#write query
supabase db reset #npx supabase db reset
supabase gen types typescript --local --schema public > database.types.ts #npx supabase gen types typescript --local --schema public > database.types.ts
git add supabase/migrations database.types.ts
git commit -m "migration description"
git push origin feature_branch

#on main branch after merge
supabase db reset --remote #npx supabase db reset --remote
```
```js
//tsx
import {createClient} from '@supabase/supabase-js'
import type {Database} from '../database.types'
const url=import.meta.env.VITE_SUPABASE_URL
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase=createClient<Database>(url,key)
const {data,error}=await supabase.from('table_name').select()
const {data:auth_data,error:auth_err}=await supabase.auth.signUp({email:'email',pwd:'pwd'})
```
add to .gitignore:`supabase/.temp`