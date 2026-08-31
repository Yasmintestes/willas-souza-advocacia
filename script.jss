document.addEventListener('DOMContentLoaded', function() {
    const botaoWhatsApp = document.getElementById('btnWhatsapp');

    if (botaoWhatsApp) {
        botaoWhatsApp.addEventListener('click', function() {
            // Número formatado corretamente: Apenas dígitos (Código do país 55 + DDD + Número)
            const numeroTelefone = "5587996410517"; 
            const mensagem = encodeURIComponent("Olá, Dr. Willas! Vim pelo site e gostaria de agendar uma consulta.");
            
            // Abre o link oficial do WhatsApp
            window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, '_blank');
        });
    }
});