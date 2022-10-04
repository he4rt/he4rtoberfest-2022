# Submissão de Exercicio

**Exercicio:** 0 - Hello World

**Nickname:** LucasVieiraS

**Nível Técnico:** - Estudante

**Empresa:** - Nenhuma

**Dificuldade de Resolução:** - Baixa

**Como rodar o desafio**: 

Para executar por meio do terminal, precisaremos do **gcc compiler** de [**mingw-w64**](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/mingw-w64-install.exe/download) 

- Clique no link do Mingw-w64 para baixar a versão de sua OS.
- Depois de instalar, abra as configurações:
    - Procure por *"Edit enviroment variables for your account."*
    - Escolha **path variable** e depois selecione **edit**
    - Selecione **new** e adicione a pasta de destino do Mingw-w64 (pasta bin) para o caminho do sistema.
    - Selecione OK para salvar e atualizar o path.
- Agora, com o setup finalizado, você pode instalar as extensões do VS Code para [**C/C++**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) para rodarmos o código.
- Agora você pode rodar qualquer código C no VS Code:
    ```bash
    gcc helloworld.c
    ```