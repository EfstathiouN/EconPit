/**
 * Ρυθμίσεις εφαρμογής.
 *
 * Όσο τα δύο πεδία του SUPABASE είναι κενά, η εφαρμογή τρέχει τοπικά:
 * όλα αποθηκεύονται στη συσκευή και δεν συγχρονίζεται τίποτα.
 * Μόλις συμπληρωθούν, ενεργοποιείται ο συγχρονισμός χωρίς άλλη αλλαγή.
 */
export const CONFIG = {
  APP_NAME: 'Διαχείριση',
  APP_SHORT: 'Καφετέρια · Βίντεο · Καταλύματα',

  SUPABASE: {
    url: 'https://bamhaktiiixyovyjunvd.supabase.co',      // π.χ. https://xxxxxxxx.supabase.co
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbWhha3RpaWl4eW92eWp1bnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4ODA2NjksImV4cCI6MjEwNDQ1NjY2OX0.r_HM71_sSiNkYsDjWHuit1_0PcToei6rfsThIweR4fk'   // το public anon key του project
  },

  SYNC: {
    intervalMs: 60_000,   // πόσο συχνά ελέγχει για αλλαγές όταν υπάρχει δίκτυο
    pageSize: 500,        // εγγραφές ανά αίτημα κατά το κατέβασμα
    retryMs: 15_000       // αναμονή μετά από αποτυχία
  },

  LOCALE: 'el-GR',
  CURRENCY: 'EUR',
  TIMEZONE: 'Europe/Athens'
};

export const isSyncConfigured = () =>
  Boolean(CONFIG.SUPABASE.url && CONFIG.SUPABASE.anonKey);
