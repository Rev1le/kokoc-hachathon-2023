<script>
let userStatistics = {
  "currentScores": {
            "sportScores": {
                "sportType1": 22,
                "sportType2": 40,
                "sportType3": 8
            },
            "money": 1000
            
        },
        "prevMonthScores": {
            "sportScores": {
                "sportType1": 48,
                "sportType2": 10,
                "sportType3": 63
            },
            "money": 200
        }
}
</script>

statistics

{#each Object.keys(userStatistics) as sport}
  {sport}
{/each}
