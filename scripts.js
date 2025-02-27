// Sample Data (Replace with full CSV data)
const linkedinPosts = [
    { title: "Jen Caldwell", impressions: 1449, engagement: 0.141 },
    { title: "Happy New Year", impressions: 163, engagement: 0.933 }
];
const linkedinTrends = [
    { date: "2025-01-23", impressions: 91 },
    { date: "2025-02-15", impressions: 303 }
];
const emailCampaigns = [
    { name: "Feb seminar - 1 hr", openRate: 88.24, ctr: 29.41 },
    { name: "Feb newsletter", openRate: 50.88, ctr: 7.35 }
];

// Executive Summary - Cross-Platform Chart
const ctxCross = document.getElementById('crossPlatformChart').getContext('2d');
new Chart(ctxCross, {
    type: 'bar',
    data: {
        labels: ['LinkedIn', 'Email', 'Website'],
        datasets: [{
            label: 'Impressions/Opens/Views (Feb 25)',
            data: [141, 31, 141],
            backgroundColor: ['#0078D4', '#00CC6A', '#FFB900']
        }]
    },
    options: { scales: { y: { beginAtZero: true } } }
});

// Big Wins Table
const bigWins = document.getElementById('bigWins');
bigWins.innerHTML = '<h3>Big Wins</h3><p>Top LinkedIn: "Happy New Year" (0.933 Engagement)<br>Top Email: "Feb seminar - 1 hr" (88.24% Open)</p>';

// LinkedIn - Trends Chart
const ctxLinkedIn = document.getElementById('linkedinTrends').getContext('2d');
new Chart(ctxLinkedIn, {
    type: 'line',
    data: {
        labels: linkedinTrends.map(d => d.date),
        datasets: [{
            label: 'Impressions',
            data: linkedinTrends.map(d => d.impressions),
            borderColor: '#0078D4',
            fill: false
        }]
    }
});

// LinkedIn - Table
const linkedinTableBody = document.querySelector('#linkedinTable tbody');
linkedinPosts.forEach(post => {
    const row = `<tr><td>${post.title}</td><td>${post.impressions}</td><td>${post.engagement}</td></tr>`;
    linkedinTableBody.innerHTML += row;
});

// Email - Campaigns Chart
const ctxEmail = document.getElementById('emailCampaigns').getContext('2d');
new Chart(ctxEmail, {
    type: 'bar',
    data: {
        labels: emailCampaigns.map(c => c.name),
        datasets: [
            { label: 'Open Rate (%)', data: emailCampaigns.map(c => c.openRate), backgroundColor: '#00CC6A' },
            { label: 'CTR (%)', data: emailCampaigns.map(c => c.ctr), backgroundColor: '#FFB900' }
        ]
    },
    options: { scales: { y: { beginAtZero: true } } }
});

// Website - Traffic Chart (Cumulative, no daily split)
const ctxWebsite = document.getElementById('websiteTraffic').getContext('2d');
new Chart(ctxWebsite, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb'],
        datasets: [{
            label: 'Views (Cumulative)',
            data: [200, 470], // Assumed split from total 470
            borderColor: '#0078D4',
            fill: false
        }]
    }
});

// Website - Referral Pie
const ctxReferral = document.getElementById('referralPie').getContext('2d');
new Chart(ctxReferral, {
    type: 'pie',
    data: {
        labels: ['LinkedIn', 'Email', 'Direct'],
        datasets: [{
            data: [40, 40, 20], // Assumed %
            backgroundColor: ['#0078D4', '#00CC6A', '#FFB900']
        }]
    }
});
