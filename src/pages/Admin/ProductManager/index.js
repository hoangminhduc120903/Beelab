import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PencilSquareIcon, TrashIcon, FunnelIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { getAllProduct, sortProduct } from '~/service/ApiService';

function ProductManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isOpenMenu1, setIsOpenMenu1] = useState(false);
  const [isOpenMenu2, setIsOpenMenu2] = useState(false);
  const [isOpenMenu3, setIsOpenMenu3] = useState(false);
  const [isOpenMenu4, setIsOpenMenu4] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpenMenu1(!isOpenMenu1);
  };
  const toggleDropdown2 = () => {
    setIsOpenMenu2(!isOpenMenu2);
  };
  const toggleDropdown3 = () => {
    setIsOpenMenu3(!isOpenMenu3);
  };
  const toggleDropdown4 = () => {
    setIsOpenMenu4(!isOpenMenu4);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prods = await getAllProduct();
        setProducts(prods);
        console.log('pre:', products);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };
    fetchData();
  }, []);

  const handleSort = async (field) => {
    try {
      if (sortBy === field) {
        // Nếu cột đã được chọn, đảo ngược thứ tự sắp xếp
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        const sortedProducts = await sortProduct(newSortOrder, field);
        setProducts(sortedProducts);
      } else {
        // Nếu chọn một cột mới, đặt cột và thứ tự sắp xếp
        setSortBy(field);
        const newSortOrder = 'asc'; // Đặt giá trị mặc định cho sortOrder khi chọn cột mới
        setSortOrder(newSortOrder);
        const sortedProducts = await sortProduct(newSortOrder, field);
        setProducts(sortedProducts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded">
      <div className="">
        <p className="text-[0.9rem] pb-2 border-b-2">
          Tổng số sản phẩm:
          <span className="text-[0.9rem] font-semibold"> </span>
        </p>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center rounded-[5px]">
          <input
            type="text"
            className="bg-[#f8f9fc] 
                h-[40px] outline-none pl-[13px] w-[350px] border-none
                rounded-[5px] placeholder:text-[14px] text-[14px] leading-[20px] font-normal"
            placeholder="Tìm kiếm"
          />
          <div
            className="bg-[#334155] hover:bg-[#4b5f7b] h-[40px] px-[14px] flex items-center justify-center cursor-pointer
                  rounded-tr-[5px] rounded-br-[5px]"
          >
            <FaSearch className="text-white" size={16} />
          </div>
        </div>
        <div className="flex items-center ">
          <Link
            to="create-product"
            className="rounded-[8px] bg-[#334155] hover:bg-[#4b5f7b] text-[0.8rem] px-3 py-[10px] text-white no-underline"
          >
            + Thêm danh mục
          </Link>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center px-3 py-[10px] text-[0.8rem] ml-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <FunnelIcon className="h-4 w-4 mx-[3px]" />
              <span className="px-3">Lọc sản phẩm</span>
              <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
            </button>

            {isOpen && (
              <div
                className="origin-top-right text-[0.8rem] absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold ">Filters</div>
                      <div className="flex">
                        <button className="mr-2 text-[#334155]">Áp dụng lọc</button>
                        <button className="text-[#334155]">Xóa lọc</button>
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Danh mục</div>
                        <button onClick={() => toggleDropdown1()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div className={`${!isOpenMenu1 && 'h-0 overflow-hidden'} relative mt-2`}>
                        <select
                          className={`w-full px-3 py-[5px] text-gray-500 bg-white
                         border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                        >
                          <option defaultChecked>Không chọn</option>
                          <option>Laravel 9 with React</option>
                          <option>React with Tailwind CSS</option>
                          <option>React With Headless UI</option>
                        </select>
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Mức giá</div>
                        <button onClick={() => toggleDropdown2()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div
                        className={`${
                          !isOpenMenu2 && 'h-0 overflow-hidden'
                        } relative mt-2 flex items-center justify-between`}
                      >
                        <input type="number" className="mr-2 p-2" placeholder="Từ" min="0" />
                        <input type="number" className="p-2" placeholder="Đến" min="0" />
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Size</div>
                        <button onClick={() => toggleDropdown3()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div className={`${!isOpenMenu3 && 'h-0 overflow-hidden'} relative mt-2`}>
                        <select
                          className={`w-full px-3 py-[5px] text-gray-500 bg-white
                         border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                        >
                          <option defaultChecked>Không chọn</option>
                          <option>Laravel 9 with React</option>
                          <option>React with Tailwind CSS</option>
                          <option>React With Headless UI</option>
                        </select>
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center justify-between w-full border-b-2">
                        <div>Màu</div>
                        <button onClick={() => toggleDropdown4()}>
                          <ChevronDownIcon className="h-4 w-4 mx-[3px]" />
                        </button>
                      </div>
                      <div className={`${!isOpenMenu4 && 'h-0 overflow-hidden'} relative mt-2`}>
                        <select
                          className={`w-full px-3 py-[5px] text-gray-500 bg-white
                         border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`}
                        >
                          <option defaultChecked>Không chọn</option>
                          <option>Laravel 9 with React</option>
                          <option>React with Tailwind CSS</option>
                          <option>React With Headless UI</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 pl-5 pr-8  border-b text-[0.8rem]">
              Sản phẩm
              {sortBy === 'name'}
              <span className="cursor-pointer" onClick={() => handleSort('name')}>
                {sortOrder === 'asc' ? ' \u25BC' : ' \u25B2'}
              </span>
            </th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Danh mục</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Mô tả</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Size</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Màu</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">
              Giá tiền
              {sortBy === 'name'}
              <span className="cursor-pointer" onClick={() => handleSort('amount')}>
                {sortOrder === 'asc' ? ' \u25BC' : ' \u25B2'}
              </span>
            </th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Ngày tạo</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Thao tác</th>
            <th className="py-2 px-4 border-b text-[0.8rem]">Ẩn</th>
          </tr>
        </thead>
        <tbody>
          {products.map(
            (item) =>
              item.category.status === 1 && (
                <tr key={item.id} className="text-[0.8rem]">
                  <td className="py-2 pl-5 pr-8 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b ">
                    <span className="text-green-800 bg-green-200 rounded px-2 ">{item.category.name}</span>
                  </td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b">{parseFloat(item.amount).toFixed(3)}đ</td>
                  <td className="py-2 px-4 border-b">{item.createdDate}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex gap-[3px]">
                      <Link
                        to={`edit/${item.id}`}
                        className="flex items-center no-underline justify-between bg-[#334155] hover:bg-[#4b5f7b] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]"
                      >
                        <PencilSquareIcon className="h-4 w-4 mr-[2px]" />
                        Sửa
                      </Link>
                      <button className="flex items-center justify-between bg-[#C81E1E] hover:bg-[#de9292] text-white text-[0.7rem] px-[6px] py-[4px] rounded-[5px]">
                        <TrashIcon className="h-4 w-4 mr-[2px]" />
                        Xóa
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <label className="flex items-center space-x-2">
                      <input
                        checked={item.status === 1 ? true : false}
                        type="checkbox"
                        className="form-checkbox rounded border-[#C81E1E] text-[#C81E1E] focus:ring-[#C81E1E] focus:border-[#C81E1E] h-4 w-4"
                      />
                    </label>
                  </td>
                </tr>
              ),
          )}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-3 border-t-2 pt-3">
        <div className="text-[0.9rem]">
          <div>
            <span>
              Hiển thị
              <span className="font-semibold"> 1</span> - <span className="font-semibold"> 10 </span> trên{' '}
              <span className="font-semibold"> 100 </span>
            </span>
          </div>
        </div>
        <div class="flex max-w-[150px] items-center text-gray-500 h-auto border font-medium rounded">
          <div className="flex-1 flex justify-center items-center cursor-pointer px-3">-</div>
          <div className="flex justify-center items-center px-2">1</div>
          <div className="flex-1  flex justify-center items-center cursor-pointer px-3">+</div>
        </div>
      </div>
    </div>
  );
}

export default ProductManager;
