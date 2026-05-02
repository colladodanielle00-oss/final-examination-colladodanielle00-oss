function showSection(sectionID){
    const sections = document.querySelectorAll('.content, .homecontent');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionID);
    if(activeSection){
        activeSection.style.display = 'block';
    }
}

document.getElementById("createBtn").addEventListener("click", () => showSection("create"));
document.getElementById("readBtn").addEventListener("click", () => showSection("read"));
document.getElementById("updateBtn").addEventListener("click", () => showSection("update"));
document.getElementById("deleteBtn").addEventListener("click", () => showSection("delete"));

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
        const toast = document.getElementById('success-toast');
        toast.classList.remove('toast-hidden');

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.classList.add('toast-hidden'), 500);
        }, 3000);

        window.history.replaceState({}, document.title, window.location.pathname);
    }
};
