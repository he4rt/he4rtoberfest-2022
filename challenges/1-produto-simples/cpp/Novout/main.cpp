#include <iostream>
#include <vector>

auto main() -> int
{
    auto e1 = 0, e2 = 0;
    std::vector<int> arr = {};
    
    std::wcin >> e1 >> e2;
    
    arr.push_back(e1);
    arr.push_back(e2);
    
    std::cout << "produto: " << (arr.front() * arr.back());

    return 0;
}
