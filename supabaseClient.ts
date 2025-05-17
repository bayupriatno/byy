import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://etxhzxdmjfwybemcrjzu.supabase.co!
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0eGh6eGRtamZ3eWJlbWNyanp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0ODM2NDcsImV4cCI6MjA2MzA1OTY0N30.zB30snBre-yakMHBtdCxw7__-2MkVP1Jxap4XJaLUmk!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)