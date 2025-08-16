import nesoi from "$";

export default nesoi.constants('database')
.enum('log_type', $ => ({
    'backup': $.opt({ alias: 'Backup' }),
    'restore': $.opt({ alias: 'Restore' }),
}))