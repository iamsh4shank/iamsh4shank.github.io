$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');

    // Fetch GitHub stars and forks dynamically for project cards
    fetchGitHubProjectStats();
});

function fetchGitHubProjectStats() {
    var repoElements = document.querySelectorAll('[data-repo]');
    var repos = [];
    repoElements.forEach(function(el) {
        var repo = el.getAttribute('data-repo');
        if (repo && repos.indexOf(repo) === -1) {
            repos.push(repo);
        }
    });

    repos.forEach(function(repo) {
        var cached = null;
        try {
            cached = sessionStorage.getItem('gh_stats_' + repo);
        } catch (e) {}

        if (cached) {
            try {
                var data = JSON.parse(cached);
                updateGitHubElements(repo, data.stars, data.forks);
                return;
            } catch (e) {}
        }

        fetch('https://api.github.com/repos/' + repo)
            .then(function(response) {
                if (!response.ok) throw new Error('Network error');
                return response.json();
            })
            .then(function(data) {
                var stars = data.stargazers_count !== undefined ? data.stargazers_count : 0;
                var forks = data.forks_count !== undefined ? data.forks_count : 0;
                try {
                    sessionStorage.setItem('gh_stats_' + repo, JSON.stringify({ stars: stars, forks: forks }));
                } catch (e) {}
                updateGitHubElements(repo, stars, forks);
            })
            .catch(function() {
                updateGitHubElements(repo, '-', '-');
            });
    });
}

function updateGitHubElements(repo, stars, forks) {
    document.querySelectorAll('.gh-stars-count[data-repo="' + repo + '"]').forEach(function(el) {
        el.textContent = stars;
    });
    document.querySelectorAll('.gh-forks-count[data-repo="' + repo + '"]').forEach(function(el) {
        el.textContent = forks;
    });
}

