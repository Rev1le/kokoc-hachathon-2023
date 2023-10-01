<script>
import StatisticsMonth from "./components/StatisticsMonth.svelte";


let userStatistics = {
  "currentScores": {
            "sportScores": {
                "sportType1": {"label": "Бег", "actionLabel": "Пробежали", "score":22},
                "sportType2": {"label": "Бег", "actionLabel": "Пробежали", "score":40},
                "sportType3": {"label": "Бег", "actionLabel": "Пробежали", "score":8}
            },
            "money": 1000
        },
        "prevMonthScores": {
            "sportScores": {
                "sportType1": {"actionLabel": "Пробежали", "score":48},
                "sportType2": {"actionLabel": "Пробежали", "score":10},
                "sportType3": {"actionLabel": "Пробежали", "score":63}
            },
            "money": 200
        }
}
</script>

<StatisticsMonth label="Статистика" sportsData="{userStatistics.currentScores}" />
<StatisticsMonth label="Статистика за прошлый месяц" sportsData="{userStatistics.prevMonthScores}" />
