function toggleTraining(entrena) {
    const field = document.getElementById('entrenaField');
    const trainingTimeField = document.getElementById('trainingTimeField');
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');

    if (field) {
        field.value = entrena ? 'true' : 'false';
    }

    if (entrena) {
        trainingTimeField?.classList.remove('training-hidden');
        btnSi?.classList.add('btn-entrena-active');
        btnNo?.classList.remove('btn-entrena-active');
    } else {
        trainingTimeField?.classList.add('training-hidden');
        btnNo?.classList.add('btn-entrena-active');
        btnSi?.classList.remove('btn-entrena-active');
        const tiempoInput = document.getElementById('tiempoEntrenamiento');
        if (tiempoInput) tiempoInput.value = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const field = document.getElementById('entrenaField');
    const isEntrena = field && field.value === 'true';
    toggleTraining(isEntrena);
});
