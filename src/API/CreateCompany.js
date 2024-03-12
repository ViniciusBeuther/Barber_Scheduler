import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://lajjczeuwxhrnlglbliw.supabase.co"
    , 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhampjemV1d3hocm5sZ2xibGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNTc4MTMsImV4cCI6MjAyNTgzMzgxM30.1AI2nSTJ7GCrI68Qjyay4CeGRW7dEWqev9vavbJCcLQ")